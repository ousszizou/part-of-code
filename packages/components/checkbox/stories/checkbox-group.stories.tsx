import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup, Checkbox } from "../src";
import { css } from "@nextri-org/styled-system/css";

const meta = {
  component: CheckboxGroup,
} as Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  name: "Usage",
  render: () => (
    <div className={css({ py: '16', px: "32" })}>
      <CheckboxGroup
        label="Select fruits"
        defaultValue={["apple", "abricot"]}
      >
        <Checkbox value="apple">Apple</Checkbox>
        <Checkbox value="banana">Banana</Checkbox>
        <Checkbox value="pear">Pear</Checkbox>
        <Checkbox value="abricot">Abricot</Checkbox>
      </CheckboxGroup>
    </div>
  ),
};

export const Horizontal: Story = {
  name: "Horizontal",
  render: () => (
    <div className={css({ py: '16', px: "32" })}>
      <CheckboxGroup
        orientation="horizontal"
        label="Select fruits"
        defaultValue={["banana", "abricot"]}
      >
        <Checkbox value="apple">Apple</Checkbox>
        <Checkbox value="banana">Banana</Checkbox>
        <Checkbox value="pear">Pear</Checkbox>
        <Checkbox value="abricot">Abricot</Checkbox>
      </CheckboxGroup>
    </div>
  ),
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <div className={css({ py: '16', px: "32" })}>
      <CheckboxGroup
        isDisabled
        label="Select fruits"
        defaultValue={["apple", "pear",]}
      >
        <Checkbox value="apple">Apple</Checkbox>
        <Checkbox value="banana">Banana</Checkbox>
        <Checkbox value="pear">Pear</Checkbox>
        <Checkbox value="abricot">Abricot</Checkbox>
      </CheckboxGroup>
    </div>
  ),
};

export const Controlled: Story = {
  name: "Controlled",
  render: () => {
    const [selected, setSelected] = React.useState(["banana", "abricot"]);
    return (
      <div className={css({ py: '16', px: "32" })}>
        <CheckboxGroup
          label="Select fruits"
          value={selected}
          onChange={setSelected}
        >
          <Checkbox value="apple">Apple</Checkbox>
          <Checkbox value="banana">Banana</Checkbox>
          <Checkbox value="pear">Pear</Checkbox>
          <Checkbox value="abricot">Abricot</Checkbox>
        </CheckboxGroup>
        <p className={css({ mt: "4" })}>Selected: {selected.join(", ")}</p>
      </div>
    )
  },
};
