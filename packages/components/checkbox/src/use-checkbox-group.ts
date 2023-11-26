"use client";

import { HTMLProps, useCallback, useMemo, useRef } from "react";
import { type AriaCheckboxGroupProps, useCheckboxGroup as useReactAriaCheckboxGroup, mergeProps } from "react-aria";
import {
  CheckboxVariantProps,
  checkboxGroup
} from "@nextri-org/styled-system/recipes";
import { cx } from "@nextri-org/styled-system/css";
import { CheckboxGroupState, useCheckboxGroupState } from "react-stately";
import { PropGetter } from "./types";

interface Props extends Omit<HTMLProps<HTMLDivElement>, "onChange"> {
  /**
   * The axis the checkbox group items should align with.
   * @default "vertical"
   */
  orientation?: "vertical" | "horizontal";
}

export type UseCheckboxGroupProps = Props &
  AriaCheckboxGroupProps & CheckboxVariantProps;

export type ContextType = {
  groupState: CheckboxGroupState;
  color?: CheckboxVariantProps["color"];
  size?: CheckboxVariantProps["size"];
  radius?: CheckboxVariantProps["radius"];
  isDisabled?: CheckboxGroupState['isDisabled'];
  lineThrough?: CheckboxVariantProps["lineThrough"];
  disableAnimation?: CheckboxVariantProps["disableAnimation"];
};

export const useCheckboxGroup = (props: UseCheckboxGroupProps) => {
  const {
    as,
    ref,
    className,
    children,
    label,
    name,
    defaultValue,
    value,
    size,
    color,
    radius,
    isDisabled,
    lineThrough,
    disableAnimation,
    isReadOnly,
    onChange,
    description,
    orientation,
    ...otherProps
  } = props;

  const Component = as || "div";

  const domRef = useRef(ref);

  const checkboxGroupProps = useMemo(() => ({
    value,
    name,
    defaultValue,
    isReadOnly,
    orientation,
    onChange,
    ...otherProps,
  }), [value,
      name,
      label,
    defaultValue,
      isReadOnly,
      orientation,
      onChange, otherProps]);

  const groupState = useCheckboxGroupState(checkboxGroupProps);

  const { labelProps, groupProps, descriptionProps, errorMessageProps } = useReactAriaCheckboxGroup(checkboxGroupProps, groupState);

  const context = useMemo<ContextType>(
    () => ({
      size,
      color,
      radius,
      lineThrough,
      isDisabled,
      disableAnimation,
      groupState,
    }),
    [
      size,
      color,
      radius,
      lineThrough,
      isDisabled,
      disableAnimation,
      groupState?.value,
      groupState?.isDisabled,
      groupState?.isReadOnly,
      groupState?.isInvalid,
      groupState?.isSelected,
    ],
  );

  const slots = useMemo(
    () => checkboxGroup({ disableAnimation }),
    [disableAnimation],
  );

  const getGroupProps: PropGetter = useCallback(
    () => {
      return {
        ref: domRef,
        className: cx(slots.base, className),
        ...mergeProps(groupProps, otherProps),
      };
    },
    [domRef, slots, className, groupProps, otherProps],
  );

  const getWrapperProps: PropGetter = useCallback(
    () => {
      return {
        className: cx(slots.wrapper, className),
        role: "presentation",
        "data-orientation": orientation,
      };
    },
    [slots, className, orientation],
  );

  const getLabelProps: PropGetter = useCallback(() => {
    return {
      className: cx(slots.label, className),
      ...labelProps
    }
  }, [slots, className, labelProps]);

  const getDescriptionProps: PropGetter = useCallback(() => {
    return {
      className: cx(slots.description, className),
      ...descriptionProps
    }
  }, [slots, className, descriptionProps]);

  const getErrorMessageProps: PropGetter = useCallback(() => {
    return {
      className: cx(slots.errorMessage, className),
      ...errorMessageProps
    }
  }, [slots, className, errorMessageProps]);

  return {
    Component,
    children,
    label,
    context,
    description,
    getGroupProps,
    getWrapperProps,
    getLabelProps,
    getDescriptionProps,
    getErrorMessageProps
  };
  
};

export type UseCheckboxGroupReturn  = ReturnType<typeof useCheckboxGroup>;
