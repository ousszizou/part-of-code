"use client";

import { Slot, type SlotProps } from "@radix-ui/react-slot";
import { AriaProgressBarProps, useProgressBar } from "@react-aria/progress";
import React, { useMemo, useRef, useCallback, type ElementType } from "react";
import { PropGetter, dataAttr } from "./types";
import { mergeProps } from "@react-aria/utils";
import { progressBar, type ProgressBarVariantProps } from "@nextri-org/styled-system/recipes";

type ComponentType = ElementType | React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<unknown>>;

interface Props extends React.HTMLAttributes<HTMLElement> {
  /**
   * Determines whether the component should be rendered as a child element.
   */
  asChild?: boolean;
  /**
   * Ref to the DOM node for the progress's root element.
   */
  ref?: React.Ref<HTMLElement>;
}

export type UseProgressProps = Props & AriaProgressBarProps & ProgressBarVariantProps;

export const useProgress = (props: UseProgressProps) => {

  const {
    ref,
    asChild,
    id,
    value = 0,
    minValue = 0,
    maxValue = 100,
    label,
    valueLabel,
    formatOptions = {
      style: "percent",
    },
    isIndeterminate,
    size,
    ...otherProps
  } = props;

  const domRef = useRef(ref);

  const Component: ComponentType = useMemo(() => {
    return asChild ? Slot : "div";
  }, [asChild]);

  const { progressBarProps, labelProps } = useProgressBar({
    id,
    label,
    valueLabel,
    value,
    minValue,
    maxValue,
    formatOptions,
    isIndeterminate
  });

  const percentage = useMemo(() => {
    if (props.isIndeterminate) {
      return undefined;
    }
    return ((value - minValue) / (maxValue - minValue)) * 100;
  }, [value, minValue, maxValue, isIndeterminate]);

  const getProgressBarProps: PropGetter = useCallback(
    (additionalProps = {}) => ({
      ref: domRef,
      className: progressBar({ size }).root,
      "data-indeterminate": dataAttr(isIndeterminate),
      ...mergeProps(progressBarProps, otherProps, additionalProps),
    }),
    [size, domRef, isIndeterminate, progressBarProps, otherProps],
  );

  const getLabelProps: PropGetter = useCallback(
    (additionalProps = {}) => ({
      className: progressBar({}).label,
      ...mergeProps(labelProps, additionalProps)
    }),
    [labelProps],
  );

  return {
    Component,
    domRef,
    percentage,
    getProgressBarProps,
    getLabelProps,
    value,
  };

};

export type UseProgressReturn = ReturnType<typeof useProgress>;
