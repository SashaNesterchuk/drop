const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
import { defineConfig } from "cypress";

const options = {
  ...browserify.defaultOptions,
  typescript: require.resolve("typescript"),
};

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber(options));
      // implement node event listeners here
    },
    specPattern: "**/*.feature",
    // excludeSpecPattern: "*.ts",
  },
});
