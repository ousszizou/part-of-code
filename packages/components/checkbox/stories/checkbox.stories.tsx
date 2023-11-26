import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../src";
import { css } from "@nextri-org/styled-system/css";
import { Heart } from "lucide-react";

const meta = {
  component: Checkbox,
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  name: "Usage",
  render: () => (
    <div className={css({ py: '16', px: "32" })}>
      <Checkbox>subscribe</Checkbox>
    </div>
  ),
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <div className={css({ py: '16', px: "32", display: "flex", alignItems: "center", gap: "4" })}>
      <Checkbox isDisabled>option</Checkbox>
      <Checkbox isDisabled defaultSelected>option</Checkbox>
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className={css({ py: '16', px: "32", display: "flex", alignItems: "center", gap: "4" })}>
      <Checkbox defaultSelected size="sm">small</Checkbox>
      <Checkbox defaultSelected size="md">medium</Checkbox>
      <Checkbox defaultSelected size="lg">large</Checkbox>
    </div>
  ),
};

export const Colors: Story = {
  name: "Colors",
  render: () => (
    <div className={css({ py: '16', px: "32", display: "flex", alignItems: "center", gap: "4" })}>
      <Checkbox defaultSelected color="default">default</Checkbox>
      <Checkbox defaultSelected color="primary">primary</Checkbox>
      <Checkbox defaultSelected color="secondary">secondary</Checkbox>
    </div>
  ),
};

export const Radius: Story = {
  name: "Radius",
  render: () => (
    <div className={css({ py: '16', px: "32", display: "flex", alignItems: "center", gap: "4" })}>
      <Checkbox defaultSelected radius="none">none</Checkbox>
      <Checkbox defaultSelected radius="sm">small</Checkbox>
      <Checkbox defaultSelected radius="md">medium</Checkbox>
      <Checkbox defaultSelected radius="lg">large</Checkbox>
      <Checkbox defaultSelected radius="full">full</Checkbox>
    </div>
  ),
};

export const Indeterminate: Story = {
  name: "Indeterminate",
  render: () => (
    <div className={css({ py: '16', px: "32" })}>
      <Checkbox defaultSelected isIndeterminate>option</Checkbox>
    </div>
  ),
};

export const LineThrough: Story = {
  name: "LineThrough",
  render: () => (
    <div className={css({ py: '16', px: "32" })}>
      <Checkbox defaultSelected lineThrough>option</Checkbox>
    </div>
  ),
};

export const CustomCheckIcon: Story = {
  name: "Custom Check Icon",
  render: () => (
    <div className={css({ py: '16', px: "32" })}>
      <Checkbox defaultSelected icon={<Heart />}>option</Checkbox>
    </div>
  ),
};
