import {test, expect} from '@playwright/test';

test('login test', async({page}) => {
    await page.goto('https://demo.applitools.com')
    await page.pause()

    await page.locator('[placeholder="Enter your username"]').fill('abhishek')
})