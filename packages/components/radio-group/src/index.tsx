'use client';

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { createStyleContext } from "../../../styco/src";
import { radioGroup } from "@nextri-org/styled-system/recipes";
import { styled } from "@nextri-org/styled-system/jsx";
import { Circle } from 'lucide-react'

const { withContext, withProvider } = createStyleContext(radioGroup);

const Indicator = withContext(styled(RadioGroupPrimitive.Indicator), 'indicator')
const Icon = withContext(styled(Circle), 'icon')

const Item = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ children: _children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item ref={ref} {...props}>
      <Indicator>
        <Icon />
      </Indicator>
    </RadioGroupPrimitive.Item>
  )
})
Item.displayName = RadioGroupPrimitive.Item.displayName

export const RadioGroup = withProvider(styled(RadioGroupPrimitive.Root), 'root')
export const RadioGroupItem = withContext(styled(Item), 'item')
