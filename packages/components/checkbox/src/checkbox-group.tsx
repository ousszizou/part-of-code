'use client';

import React, { forwardRef } from "react";
import { UseCheckboxGroupProps, useCheckboxGroup } from "./use-checkbox-group";
import { CheckboxGroupProvider } from "./checkbox-group-context";

export interface CheckboxGroupProps extends UseCheckboxGroupProps { }

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {

  const {
    children,
    context,
    label,
    description,
    getGroupProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
  } = useCheckboxGroup({ ref, ...props });

  return (
    <div {...getGroupProps()}>
      {label && <span {...getLabelProps()}>{label}</span>}
      <div {...getWrapperProps()}>
        <CheckboxGroupProvider value={context}>{children}</CheckboxGroupProvider>
      </div>
      {description ? (
        <div {...getDescriptionProps()}>{description}</div>
      ) : null}
    </div>
  );
})
