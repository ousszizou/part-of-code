import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "../src";
import { css } from "@nextri-org/styled-system/css";
import { CoffeeIcon, PartyPopperIcon } from "lucide-react";

const meta = {
  component: Alert,
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  name: "Alert Usage",
  render: () => (
    <div className={css({ display: "flex", flexDir: "column", gap: "6" })}>
      <Alert>
        <CoffeeIcon size="20" className={css({ mt: "1" })} />
        <AlertTitle>Application submitted!</AlertTitle>
        <AlertDescription>
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>
      <div className={css({ w: "1/2" })}>
        <Alert>
          <PartyPopperIcon size="20" className={css({ mt: "1" })} />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your application has been received. We will review your application
            and respond within the next 48 hours.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};
