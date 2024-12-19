import { test, expect } from "@playwright/test";
const { chromium } = require("playwright");
const { AxeBuilder } = require("@axe-core/playwright");
const percySnapshot = require("@percy/playwright");

test("test", async ({ page }) => {
  await page.goto("http://localhost:9000/");
  try {
    const results = await new AxeBuilder({ page }).analyze();
    console.log(results);
  } catch (e) {
    // do something with the error
  }
  await expect(
    page.getByRole("heading", { name: "Welcome to Setup Example" }),
  ).toBeVisible();
  await expect(page.getByRole("paragraph")).toContainText("0");
  await page.getByRole("button", { name: "+" }).click();
  await page.getByText("1").click();
  await page.getByRole("button", { name: "-" }).click();
  await page.getByText("0").click();
});

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:9000/", { waitUntil: "networkidle" });
  await percySnapshot(page, "Setup Example");
  await browser.close();
})();
