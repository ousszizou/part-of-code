'use client';

import { VisuallyHidden } from "react-aria";
import React, { ReactElement, cloneElement, forwardRef } from "react";
import { UseCheckboxProps, useCheckbox } from "./use-checkbox";
import { CheckboxIcon } from "./checkbox-icon";

export interface CheckboxProps extends UseCheckboxProps { }

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {

  const {
    children,
    getBaseProps,
    getWrapperProps,
    getLabelProps,
    getInputProps,
    getIconProps,
    icon = <CheckboxIcon />,
    Component,
  } = useCheckbox(props, ref);

  const clonedIcon =
    typeof icon === "function"
      ? icon(getIconProps())
      : cloneElement(icon as ReactElement, getIconProps());

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>{clonedIcon}</span>
      {children && <span {...getLabelProps()}>{children}</span>}
    </Component>
  )
});
