import { defineConfig } from "astro/config";

// Core integrations & plugins
import preact from "@astrojs/preact";

// UnoCSS
import unocss from "@unocss/astro";
import presetWind from "@unocss/preset-wind";
import presetAttributify from "@unocss/preset-attributify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({ compat: true }),
    unocss({
      presets: [presetWind(), presetAttributify()],
    }),
  ],
  vite: {},
});
