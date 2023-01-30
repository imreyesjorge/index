import { defineConfig } from "astro/config";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://reyes.cool",
  integrations: [prefetch()]
});