import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 20000,
  e2e: {
    chromeWebSecurity: false,
    requestTimeout: 20000,
    specPattern: "./**/*.spec.{js,jsx,ts,tsx}",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 End2EndCypress",
    supportFile: "cypress/support/index.ts",
  },
});
