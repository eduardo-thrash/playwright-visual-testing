import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

export default defineConfig({
  ...defineBddConfig({
    features: ['./features/**/*.feature'],
    steps: ['./steps/**/*.ts']
  }),
  use: {
    // Only capture screenshots when a test fails
    screenshot: 'only-on-failure'
  },
  expect: {
    toHaveScreenshot: {
      threshold: 0.2
    }
  }
});
