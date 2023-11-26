import { defineConfig } from "@pandacss/dev";
import type { Config } from "@pandacss/types";
import nextriPreset from "@nextri-org/preset";
import pandaPreset from "@pandacss/preset-panda";

export default defineConfig({
  watch: true,
  clean: true,
  presets: [pandaPreset, nextriPreset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./node_modules/@nextri-org/preset/src/**/*.tsx",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "@nextri-org/styled-system",
  emitPackage: true,
  jsxFramework: "react",
} as Config);
