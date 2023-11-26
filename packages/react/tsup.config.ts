import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.tsx"],
  minify: true,
  clean: true,
  target: "es2019",
  format: ["cjs", "esm"],
  external: ["react", "react-dom"],
});
