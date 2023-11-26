import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.tsx"],
  minify: true,
  clean: true,
  target: "es2019",
  format: ["cjs", "esm"],
  banner: { js: '"use client";' },
  external: [
    "react",
    "react-dom",
    "@nextri-org/styled-system",
    "@nextri-org/preset",
  ],
});
