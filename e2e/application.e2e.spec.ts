import { test, expect } from '@playwright/test';

test('create application, complete contact info, verify in applications list', async ({ page }) => {
  // Go to home (products) page
  await page.goto('/');

  // Start first application
  const startButtons = page.getByRole('button', { name: /Start my application/i });
  await expect(startButtons.first()).toBeVisible();
  await startButtons.first().click();

  // Navigated to application form
  await expect(page).toHaveURL(/\/application\//);

  // Fill contact information
  const firstName = `Test${Date.now()}`;
  const lastName = 'User';
  const email = `test${Date.now()}@example.com`;
  const phone = '(555) 123-4567';

  await page.getByLabel(/First Name/i).fill(firstName);
  await page.getByLabel(/Last Name/i).fill(lastName);
  await page.getByLabel(/Email/i).fill(email);
  await page.getByLabel(/Phone/i).fill(phone);

  // Save form
  await page.getByRole('button', { name: /Save/i }).click();

  // Redirects to applications list
  await expect(page).toHaveURL(/\/applications/);

  // Verify the newly updated application is present (name visible somewhere on the page)
  await expect(page.getByText(new RegExp(`${firstName} ${lastName}`))).toBeVisible();
});


