import type { UserConfig as ViteConfig } from "vite";
import type { UserConfig as VitestConfig } from "vitest/config";

const config: ViteConfig & VitestConfig = {
  test: {},
};

export default config;
