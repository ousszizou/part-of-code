import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src";
import { css, cx } from "@nextri-org/styled-system/css";
import { Loader2, Loader, Github, Heart, Sun } from "lucide-react";
import { icon } from "@nextri-org/styled-system/recipes";

const meta = {
  component: Button,
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// TODO: Make TS Happy ^__^
// export const Default: Story = {
//   args: button.raw({
//     children: "default button",
//   }),
// };

export const Variants: Story = {
  name: "Button Variants",
  render: () => (
    <div className={css({ display: "flex", gap: "6" })}>
      <Button variant="solid">solid</Button>
      <Button variant="flat">flat</Button>
      <Button variant="outline">outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  name: "Button Sizes",
  render: () => (
    <div className={css({ display: "flex", gap: "6" })}>
      <Button size="sm">small</Button>
      <Button size="md">medium</Button>
      <Button size="lg">large</Button>
      <Button size="icon-sm">
        <Sun />
      </Button>
      <Button size="icon-md">
        <Sun />
      </Button>
      <Button size="icon-lg">
        <Sun />
      </Button>
    </div>
  ),
};

export const Radius: Story = {
  name: "Button Radius",
  render: () => (
    <div className={css({ display: "flex", gap: "6" })}>
      <Button radius="none">none</Button>
      <Button radius="sm">small</Button>
      <Button radius="md">medium</Button>
      <Button radius="lg">large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  name: "Button With Icons",
  render: () => (
    <div className={css({ display: "flex", gap: "6" })}>
      <Button>
        <Github className={cx(icon())} />
        Continue with GitHub
      </Button>
      <Button>
        Continue with GitHub
        <Github className={cx(icon())} />
      </Button>
      <Button size="icon-md">
        <Heart className={cx(icon())} />
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  name: "Button Loading",
  render: () => (
    <div className={css({ display: "flex", gap: "6" })}>
      <Button isDisabled>
        <Loader2 className={cx(icon(), css({ animation: "spin" }))} />
        loading
      </Button>
      <Button isDisabled>
        loading
        <Loader2 className={cx(icon(), css({ animation: "spin" }))} />
      </Button>
      <Button size="icon-md" isDisabled>
        <Loader className={cx(icon(), css({ animation: "spin" }))} />
      </Button>
    </div>
  ),
};

