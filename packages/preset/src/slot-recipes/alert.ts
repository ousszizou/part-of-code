import { defineSlotRecipe } from "@pandacss/dev";

export const alert = defineSlotRecipe({
  className: "alert",
  description: "Styles for the Alert component",
  slots: ["root", "title", "description"],
  base: {
    root: {
      position: "relative",
      width: "full",
      rounded: "lg",
      border: "base",
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      p: "4",
      "&:has(svg)": {
        pl: "8",
      },
    },
    title: {
      mb: "1",
      fontWeight: "medium",
      leading: "none",
      tracking: "tight",
    },
    description: {
      textStyle: "sm",

      "& p": {
        leading: "relaxed",
      },
    },
  },
  variants: {},
  defaultVariants: {},
});
