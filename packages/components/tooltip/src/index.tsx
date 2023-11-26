'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { createStyleContext } from "../../../styco/src";
import { tooltip } from "@nextri-org/styled-system/recipes";
import { styled } from "@nextri-org/styled-system/jsx";

const { withContext, withProvider } = createStyleContext(tooltip);

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = withProvider(styled(TooltipPrimitive.Root), "root");
export const TooltipTrigger = withContext(styled(TooltipPrimitive.Trigger), "trigger");
export const TooltipContent = withContext(styled(TooltipPrimitive.Content), "content");
