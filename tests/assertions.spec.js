import {test, expect} from '@playwright/test';

test('first test', async({page}) => {
    await page.goto('https://google.com')
    await page.pause()

    await expect(page.locator('text=Google')).toHaveTitle('Google')
})