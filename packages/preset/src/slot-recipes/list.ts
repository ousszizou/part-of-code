import { defineSlotRecipe } from "@pandacss/dev";

export const list = defineSlotRecipe({
  className: "list",
  description: "Styles for the List component",
  slots: ["container", "item", "icon"],
  base: {
    container: {
      listStylePosition: "inside",
      fontSize: "md",
    },
    item: {
      p: "2",
    },
    icon: {
      display: "inline",
      me: "1",
    },
  },
});
