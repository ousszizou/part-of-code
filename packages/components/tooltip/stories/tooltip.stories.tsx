import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../src";
import { css } from "@nextri-org/styled-system/css";
import { Button } from "../../button/src"

const meta = {
  component: Tooltip,
} as Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  name: "Tooltip Usage",
  render: () => (
    <div className={css({ py: '16', px: "32" })}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="outline" size="sm">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>
            <p>I'm a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};
