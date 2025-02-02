import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4500",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
