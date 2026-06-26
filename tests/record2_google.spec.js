import { test, expect } from '@playwright/test';

test("Google Search", async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.locator('body').click();
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('');
  await page.getByRole('button', { name: 'Google apps' }).click();
  await page.getByRole('button', { name: 'Google apps' }).click();
  await page.getByRole('button', { name: 'Google apps' }).click();
  await page.getByRole('button', { name: 'Google apps' }).click();
  await page.getByRole('link', { name: 'Search for Images' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})