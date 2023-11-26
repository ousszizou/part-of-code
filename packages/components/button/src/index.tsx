"use client";
import React from "react";
import {
  Button as _Button,
  ButtonProps as _ButtonProps,
} from "react-aria-components";
import { button, ButtonVariantProps } from "@nextri-org/styled-system/recipes";
import { styled } from "@nextri-org/styled-system/jsx";
import type { JsxStyleProps } from "@nextri-org/styled-system/types";

type ExtendedColorPalette = Pick<JsxStyleProps, "colorPalette"> & {
  colorPalette?: "core" | "brand";
};

export interface ButtonProps
  extends _ButtonProps,
    ButtonVariantProps,
    ExtendedColorPalette {}

export const Button: React.FC<ButtonProps> = styled(_Button, button);
