"use client";

import { ElementType, ForwardedRef, ReactNode, useCallback, useId, useRef, useState } from "react";
import { type AriaCheckboxProps, useCheckbox as useReactAriaCheckbox,
  useCheckboxGroupItem as useReactAriaCheckboxGroupItem,
  usePress,
  useHover,
  useFocusRing,
  mergeProps,
  chain, } from "react-aria";
import { useToggleState } from "react-stately";
import {
  CheckboxVariantProps,
  checkbox
} from "@nextri-org/styled-system/recipes";
import {
  cx,
} from "@nextri-org/styled-system/css";
import { PropGetter, dataAttr } from "./types";
import { useCheckboxGroupContext } from "./checkbox-group-context";

export type CheckboxIconProps = {
  "data-checked": string;
  isSelected: boolean;
  isIndeterminate: boolean;
  disableAnimation: boolean;
  className: string;
};

export interface UseCheckboxProps extends Omit<AriaCheckboxProps, "children">, CheckboxVariantProps {
  as?: ElementType;
  /**
   * The label of the checkbox.
   */
  children?: ReactNode,
  /**
   * Whether the checkbox is currently hovered with a mouse.
   * @selector [data-hovered]
   */
  isHovered?: boolean;
  /**
   * Whether the checkbox is currently in a pressed state.
   * @selector [data-pressed]
   */
  isPressed?: boolean;
  /**
   * Whether the checkbox is focused, either via a mouse or keyboard.
   * @selector [data-focused]
   */
  isFocused?: boolean;
  /**
   * Whether the checkbox is keyboard focused.
   * @selector [data-focus-visible]
   */
  isFocusVisible?: boolean;
  /**
   * Whether the checkbox is disabled.
   * @selector [data-disabled]
   */
  isDisabled?: boolean;
  /**
   * Whether the checkbox is read only.
   * @selector [data-readonly]
   */
  isReadOnly?: boolean;
  /**
   * Whether the checkbox invalid.
   * @selector [data-invalid]
   */
  isInvalid?: boolean;
  /**
   * Whether the checkbox is required.
   * @selector [data-required]
   */
  isRequired?: boolean;
  /**
   * The icon to be displayed when the checkbox is checked.
   */
  icon?: ReactNode | ((props: CheckboxIconProps) => ReactNode);
}

export const useCheckbox = (props: UseCheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {

  const groupContext = useCheckboxGroupContext();
  const isInGroup = !!groupContext;

  const {
    as,
    value = "",
    children,
    icon,
    name,
    color = groupContext?.color ?? "primary",
    size = groupContext?.size ?? "md",
    radius = groupContext?.radius,
    lineThrough = groupContext?.lineThrough ?? false,
    isDisabled: isDisabledProp = groupContext?.isDisabled ?? false,
    disableAnimation = groupContext?.disableAnimation ?? false,
    isRequired = false,
    autoFocus = false,
    isInvalid,
    isIndeterminate = false,
    defaultSelected,
    isReadOnly: isReadOnlyProp = false,
    isSelected: isSelectedProp,
    onFocus,
    onFocusChange,
    onChange,
    onKeyDown,
    onKeyUp,
    ...otherProps
  } = props;

  const Component = as || "label";

  let state = useToggleState(props);

  const inputRef = useRef<HTMLInputElement>(null);

  const labelId = useId();

  let { inputProps, isSelected, isDisabled, isReadOnly, isPressed: isPressedKeyboard } = isInGroup ? useReactAriaCheckboxGroupItem({
    name,
    children,
    value,
    isIndeterminate,
    onChange,
    isReadOnly: isReadOnlyProp,
    isDisabled: isDisabledProp,
    autoFocus,
    onFocus,
    onFocusChange,
    onKeyDown,
    onKeyUp,
  }, groupContext.groupState, inputRef) :  useReactAriaCheckbox(props, state, inputRef);

  const isInteractionDisabled = isDisabled || isReadOnly;

  let [isPressed, setPressed] = useState(false);
  let { pressProps } = usePress({
    isDisabled: isInteractionDisabled,
    onPressStart(e) {
      if (e.pointerType !== 'keyboard') {
        setPressed(true);
      }
    },
    onPressEnd(e) {
      if (e.pointerType !== 'keyboard') {
        setPressed(false);
      }
    }
  });

  let { hoverProps, isHovered } = useHover({
    isDisabled: isInteractionDisabled
  });

  const {focusProps, isFocused, isFocusVisible} = useFocusRing({
    autoFocus: inputProps.autoFocus,
  });

  let pressed = isInteractionDisabled ? false : (isPressed || isPressedKeyboard);

  if (isRequired) {
    inputProps.required = true;
  }

  const getBaseProps: PropGetter = useCallback(() => {
    return {
      ref: inputRef,
      className: cx("group", checkbox({ disableAnimation, color, isDisabled, size }).base),
      "data-disabled": dataAttr(isDisabled),
      "data-selected": dataAttr(isSelected || isIndeterminate),
      "data-invalid": dataAttr(isInvalid),
      "data-hover": dataAttr(isHovered),
      "data-focus": dataAttr(isFocused),
      "data-pressed": dataAttr(pressed),
      "data-readonly": dataAttr(inputProps.readOnly),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-indeterminate": dataAttr(isIndeterminate),
      ...mergeProps(hoverProps, pressProps),
    };
  }, [
    isDisabled,
    isSelected,
    isIndeterminate,
    isHovered,
    isFocused,
    pressed,
    inputProps.readOnly,
    isFocusVisible,
    hoverProps,
    pressProps,
    disableAnimation, 
    color, 
    isDisabled, 
    size
  ]);

  const getWrapperProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        ...props,
        "aria-hidden": true,
        className: checkbox({disableAnimation, color, isDisabled, size, radius}).wrapper,
      };
    },
    [disableAnimation, color, isDisabled, size, radius],
  );

  const getInputProps: PropGetter = useCallback(() => {
    return {
      ref: inputRef,
      ...mergeProps(inputProps, focusProps),
      onChange: chain(inputProps.onChange, onChange),
    };
  }, [inputProps, focusProps, onChange]);

  const getLabelProps: PropGetter = useCallback(
    () => ({
      id: labelId,
      className: checkbox({disableAnimation, color, isDisabled, size, lineThrough}).label,
    }),
    [isDisabled, isSelected, isInvalid, lineThrough, size, color, disableAnimation],
  );

  const getIconProps = useCallback(
    () =>
      ({
        isSelected: isSelected,
        isIndeterminate: !!isIndeterminate,
        className: checkbox({disableAnimation, color, isDisabled, size}).icon,
      } as CheckboxIconProps),
    [isSelected, isIndeterminate, disableAnimation, color, isDisabled, size],
  );

  return {
    Component,
    icon,
    children,
    isFocused,
    isHovered,
    isFocusVisible,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getIconProps,
  }
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>;
