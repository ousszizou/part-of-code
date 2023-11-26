import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { List, ListIcon, ListItem, OrderedList, UnorderedList } from "../src";
import { css } from "@nextri-org/styled-system/css";
import { CheckCircle2, CircleDotDashed } from "lucide-react";
import { icon } from "@nextri-org/styled-system/recipes";

const meta = {
  component: List,
} as Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  name: "Usage",
  render: () => (
    <div className={css({ display: "flex", p: "10" })}>
      <List>
        <ListItem>
          <ListIcon as={CheckCircle2} />
          Lorem ipsum dolor sit amet
        </ListItem>
        <ListItem>
          <ListIcon as={CircleDotDashed} />
          Consectetur adipiscing elit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircle2} />
          Integer molestie lorem at massa
        </ListItem>
        <ListItem>
          <ListIcon as={CircleDotDashed} />
          Facilisis in pretium nisl aliquet
        </ListItem>
      </List>
    </div>
  ),
};

export const Spacing: Story = {
  name: "Spacing",
  render: () => (
    <div className={css({ display: "flex", gap: "10", p: "10" })}>
      <List spacing="3">
        <ListItem>
          <ListIcon as={CheckCircle2} />
          Lorem ipsum dolor sit amet
        </ListItem>
        <ListItem>
          <ListIcon as={CircleDotDashed} />
          Consectetur adipiscing elit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircle2} />
          Integer molestie lorem at massa
        </ListItem>
        <ListItem>
          <ListIcon as={CircleDotDashed} />
          Facilisis in pretium nisl aliquet
        </ListItem>
      </List>
      <List spacing={6}>
        <ListItem>
          <ListIcon as={CheckCircle2} />
          Lorem ipsum dolor sit amet
        </ListItem>
        <ListItem>
          <ListIcon as={CircleDotDashed} />
          Consectetur adipiscing elit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircle2} />
          Integer molestie lorem at massa
        </ListItem>
        <ListItem>
          <ListIcon as={CircleDotDashed} />
          Facilisis in pretium nisl aliquet
        </ListItem>
      </List>
    </div>
  ),
};

export const UnorderedListUsage: Story = {
  name: "UnorderedList",
  render: () => (
    <div className={css({ display: "flex", p: "10" })}>
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
    </div>
  ),
};

export const OrderedListUsage: Story = {
  name: "OrderedList",
  render: () => (
    <div className={css({ display: "flex", p: "10" })}>
      <OrderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </OrderedList>
    </div>
  ),
};
