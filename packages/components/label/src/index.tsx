'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import {
  label
} from "@nextri-org/styled-system/recipes";
import { styled, HTMLStyledProps } from "@nextri-org/styled-system/jsx";

export const Label = styled(LabelPrimitive.Root, label)
export type LabelProps = HTMLStyledProps<typeof Label>
