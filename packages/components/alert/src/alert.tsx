"use client";

import React, {
  ReactNode,
  HTMLAttributes,
  forwardRef,
  Children,
} from "react";
import {
  alert,
  type AlertVariantProps,
} from "@nextri-org/styled-system/recipes";
import { cx, css } from "@nextri-org/styled-system/css";

interface AlertRootProps extends AlertVariantProps {
  children?: ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertRootProps>(
  ({ children, ...props }, ref) => {
    let icon: React.ReactNode = null;
    let title: React.ReactNode = null;
    let description: React.ReactNode = null;

    Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === AlertTitle) {
          title = child;
        } else if (child.type === AlertDescription) {
          description = child;
        } else {
          icon = child;
        }
      }
    });

    return (
      <div ref={ref} className={alert().root} {...props}>
        {icon}
        <div className={css({ display: "flex", flexDir: "column" })}>
          {title}
          {description}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTags;
}

export const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ as: As = "h5", className, ...props }, ref) => {
    const classNames = cx(alert().title, className);
    return <As ref={ref} className={classNames} {...props} />;
  }
);
AlertTitle.displayName = "AlertTitle";

interface AlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
}

export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ as: As = "p", className, ...props }, ref) => {
  const classNames = cx(alert().description, className);
  return <As ref={ref} className={classNames} {...props} />;
});
AlertDescription.displayName = "AlertDescription";
