import { defineConfig } from "@pandacss/dev";
import nextriPreset from "@nextri-org/preset";
import pandaPreset from "@pandacss/preset-panda";

export default defineConfig({
  watch: true,
  presets: [pandaPreset, nextriPreset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "../../packages/components/**/src/*.{js,jsx,ts,tsx}",
    "../../packages/components/**/stories/*.stories.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  emitPackage: true,
  outdir: "@nextri-org/styled-system",
  jsxFramework: "react",
});
