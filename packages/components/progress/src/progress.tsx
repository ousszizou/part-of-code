"use client";

import React from 'react';
import { useProgress, type UseProgressProps } from './use-progress';
import { ProgressContext, useProgressContext } from './progress-context';
import { progressBar } from "@nextri-org/styled-system/recipes";
import { cx } from "@nextri-org/styled-system/css";

interface ProgressBarProps extends UseProgressProps { }

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ children, ...props }, ref) => {
    const state = useProgress({ ...props, ref });
    return (
      <ProgressContext.Provider value={state}>
        <div {...state.getProgressBarProps()}>
          {children}
        </div>
      </ProgressContext.Provider>
    );
  }
);
ProgressBar.displayName = 'ProgressBar';

interface ProgressBarTrackProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ProgressBarTrack = React.forwardRef<HTMLDivElement, ProgressBarTrackProps>(
  ({ children, className, ...props }, ref) => {
    return <div ref={ref} className={cx(progressBar().track, className)} {...props}>{children}</div>;
  }
);
ProgressBarTrack.displayName = 'ProgressBarTrack';

interface ProgressBarIndicatorProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ProgressBarIndicator = React.forwardRef<HTMLDivElement, ProgressBarIndicatorProps>(
  ({ className, ...props }, ref) => {
    const { percentage } = useProgressContext();
    return <div ref={ref} style={{ width: percentage ? `${percentage.toFixed(0)}%` : "0" }} className={cx(progressBar().indicator, className)} {...props} />;
  }
);
ProgressBarIndicator.displayName = 'ProgressBarIndicator';

type ProgressBarLabelRenderProp = (props: { percentage?: number, label?: string, valueLabel?: string; value?: number }) => React.ReactNode;

interface ProgressBarLabelProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  label?: string;
  valueLabel?: string;
  children: ProgressBarLabelRenderProp;
}

export const ProgressBarLabel = React.forwardRef<HTMLSpanElement, ProgressBarLabelProps>(
  ({ label, valueLabel, children, ...props }, ref) => {
    const { getLabelProps, percentage, value } = useProgressContext();
    const labelContent = children({ percentage, label, valueLabel, value });
    return <span ref={ref} {...getLabelProps()} {...props}>{labelContent}</span>;
  }
);
ProgressBarLabel.displayName = 'ProgressBarLabel';
