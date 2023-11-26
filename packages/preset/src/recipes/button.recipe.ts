import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
  className: "button",
  jsx: ["Button"],
  description: "Styles for the Button component",
  base: {
    colorPalette: "core",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textStyle: "sm",
    fontWeight: "medium",
    transition: "colors",
    cursor: "pointer",
    focusRingOffsetColor: "background",
    gap: "2",

    _focusVisible: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      focusRingWidth: "2",
      focusRingColor: "ring",
      focusRingOffsetWidth: "2",
    },

    _disabled: {
      pointerEvents: "none",
      opacity: "80%",
    },
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: "primary",
        color: "primary.foreground",
      },
      outline: {
        border: "input",
        bg: "background",

        _hover: {
          bg: "accent",
          color: "accent.foreground",
        },
      },
      flat: {
        backgroundColor: "secondary",
        color: "secondary.foreground",
        _hover: {
          bga: "secondary/90",
        },
      },
      ghost: {
        _hover: {
          bg: "accent",
          color: "accent.foreground",
        },
      },
      link: {
        color: "primary",
        textUnderlineOffset: "4px",

        _hover: {
          textDecoration: "underline",
        },
      },
    },
    size: {
      sm: {
        h: "9",
        px: "3",
      },
      md: {
        h: "10",
        px: "4",
        py: "2",
      },
      lg: {
        h: "11",
        px: "8",
      },
      "icon-sm": {
        w: "9",
        h: "9",
      },
      "icon-md": {
        w: "10",
        h: "10",
      },
      "icon-lg": {
        w: "11",
        h: "11",
      },
    },
    radius: {
      none: { borderRadius: "0" },
      sm: { borderRadius: "sm" },
      md: { borderRadius: "md" },
      lg: { borderRadius: "lg" },
      full: { borderRadius: "full" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    radius: "md",
  },
});
