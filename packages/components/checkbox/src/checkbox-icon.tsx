import React from "react";
import type { UseCheckboxReturn } from "./use-checkbox";

type CheckboxIconProps = Partial<ReturnType<UseCheckboxReturn["getIconProps"]>>;

function CheckIcon(props: CheckboxIconProps) {
  const { isSelected, disableAnimation, ...otherProps } = props;

  return (
    <svg aria-hidden="true" role="presentation" viewBox="0 0 17 18" {...otherProps}>
      <polyline
        fill="none"
        points="1 9 7 14 15 4"
        stroke="currentColor"
        strokeDasharray={22}
        strokeDashoffset={isSelected ? 44 : 66}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        style={
          !disableAnimation && isSelected
            ? {
              transition: "stroke-dashoffset 250ms linear 0.2s",
            }
            : {}
        }
      />
    </svg>
  );
}

function IndeterminateIcon(props: CheckboxIconProps) {
  const { isSelected, disableAnimation, ...otherProps } = props;

  return (
    <svg stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" {...otherProps}>
      <line x1="21" x2="3" y1="12" y2="12" />
    </svg>
  );
}

export function CheckboxIcon(props: CheckboxIconProps) {
  const { isIndeterminate, ...otherProps } = props;
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon;

  return <BaseIcon {...otherProps} />;
}