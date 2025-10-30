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

  // Wait for the form heading to ensure page is ready
  const formHeading = page.getByRole('heading', { name: /(Your contact details|Your current contact details)/i });
  await expect(formHeading).toBeVisible();

  // Fill contact information
  const firstName = `Test${Date.now()}`;
  const lastName = 'User';
  const email = `test${Date.now()}@example.com`;
  const phone = '(555) 123-4567';

  await page.getByPlaceholder('Enter your first name').fill(firstName);
  await page.getByPlaceholder('Enter your last name').fill(lastName);
  await page.getByPlaceholder('Enter your email').fill(email);
  await page.getByPlaceholder('Enter your phone number').fill(phone);

  // Wait for Save to be enabled (valid + dirty), then click
  const saveButton = page.getByRole('button', { name: /Save/i });
  await expect(saveButton).toBeEnabled();
  await saveButton.click();

  // Redirects to applications list
  await expect(page).toHaveURL(/\/applications/);

  // Verify in the desktop table first; fall back to any visible text
  const nameCell = page.getByRole('cell', { name: new RegExp(`${firstName} ${lastName}`) });
  await expect(nameCell.or(page.getByText(new RegExp(`${firstName} ${lastName}`)).filter({ has: page.locator('visible=true') }))).toBeVisible();
});


