import { test } from "@playwright/test";

test("Open localhost", async ({ page }) => {
  await page.goto("http://localhost:6565/");
});
