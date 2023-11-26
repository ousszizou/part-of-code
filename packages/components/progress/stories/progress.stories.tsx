import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar, ProgressBarIndicator, ProgressBarLabel, ProgressBarTrack } from "../src";
import { css } from "@nextri-org/styled-system/css";

const meta = {
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  name: "Progress Usage",
  render: () => (
    <div className={css({ w: "xs" })}>
      <ProgressBar
        value={7}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarTrack>
          <ProgressBarIndicator />
        </ProgressBarTrack>
      </ProgressBar>
    </div>
  ),
};

export const Size: Story = {
  name: "Progress Size",
  render: () => (
    <div className={css({ w: "xs", display: "flex", flexDir: "column", gap: "3" })}>
      <ProgressBar
        value={7}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarTrack className={css({ h: "1" })}>
          <ProgressBarIndicator />
        </ProgressBarTrack>
      </ProgressBar>
      <ProgressBar
        value={7}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarTrack>
          <ProgressBarIndicator />
        </ProgressBarTrack>
      </ProgressBar>
      <ProgressBar
        value={7}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarTrack className={css({ h: "3" })}>
          <ProgressBarIndicator />
        </ProgressBarTrack>
      </ProgressBar>
    </div>
  ),
};

export const WithLabel: Story = {
  name: "Progress With Label",
  render: () => (
    <div className={css({ w: "xs", display: "flex", flexDir: "column", gap: "3" })}>
      <ProgressBar
        value={7}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarLabel label="Progress">
          {({ label, percentage }) => (
            <div className={css({ display: "flex", justifyContent: "space-between" })}>
              <span>{label}</span>
              <span>
                {percentage ? <>{percentage.toFixed(0)}%</> : <>Loading...</>}
              </span>
            </div>
          )}
        </ProgressBarLabel>
        <ProgressBarTrack>
          <ProgressBarIndicator />
        </ProgressBarTrack>
      </ProgressBar>
      <ProgressBar
        value={7}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarLabel label="Sending...">
          {({ label, value }) => (
            <div className={css({ display: "flex", justifyContent: "space-between" })}>
              <span>{label}</span>
              <span>
                {`${new Intl.NumberFormat('ja-JP', { style: "currency", currency: "JPY" }).format(value as number)}`}
              </span>
            </div>
          )}
        </ProgressBarLabel>
        <ProgressBarTrack>
          <ProgressBarIndicator />
        </ProgressBarTrack>
      </ProgressBar>
    </div>
  ),
};

export const Colors: Story = {
  name: "Progress Colors",
  render: () => (
    <div className={css({ w: "xs", display: "flex", flexDir: "column", gap: "3" })}>
      <ProgressBar
        value={100}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarTrack>
          <ProgressBarIndicator className={css({ bg: "green.500" })} />
        </ProgressBarTrack>
      </ProgressBar>
      <ProgressBar
        value={5}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarTrack>
          <ProgressBarIndicator className={css({ bg: "red.500" })} />
        </ProgressBarTrack>
      </ProgressBar>
      <ProgressBar
        value={50}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarTrack>
          <ProgressBarIndicator className={css({ bg: "blue.500" })} />
        </ProgressBarTrack>
      </ProgressBar>
      <ProgressBar
        value={75}
        minValue={0}
        maxValue={100}
        aria-label="Progress bar"
      >
        <ProgressBarTrack>
          <ProgressBarIndicator className={css({ bg: "orange.500" })} />
        </ProgressBarTrack>
      </ProgressBar>
    </div>
  ),
};
