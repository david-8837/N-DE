import { test, expect, type Page } from '@playwright/test';

/**
 * Deterministic environment for screenshots:
 * - storage cleared so ratings/applied presets never leak between runs
 * - reduced motion so transitions settle instantly
 * - web fonts awaited so text never renders in a fallback face
 */
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.clear();
  });
  await page.emulateMedia({ reducedMotion: 'reduce' });
});

async function openApp(page: Page) {
  await page.goto('/');
  await page.waitForFunction(() => document.fonts.status === 'loaded');
  await expect(page.getByRole('button', { name: /row 1 column 1/i })).toBeVisible();
}

function nav(page: Page, name: RegExp) {
  return page.getByRole('navigation', { name: 'Primary' }).getByRole('button', { name });
}

test('keymap studio', async ({ page }) => {
  await openApp(page);
  await expect(page).toHaveScreenshot('keymap-studio.png');
});

test('presets library', async ({ page }) => {
  await openApp(page);
  await nav(page, /presets library/i).click();
  await expect(page.getByRole('heading', { name: /preset community library/i })).toBeVisible();
  await expect(page).toHaveScreenshot('presets-library.png', { fullPage: true });
});

test('preset preview', async ({ page }) => {
  await openApp(page);
  await nav(page, /presets library/i).click();
  await page.getByRole('button', { name: /preview details/i }).first().click();
  await expect(page.getByRole('heading', { name: /framer canvas suite/i })).toBeVisible();
  await expect(page).toHaveScreenshot('preset-preview.png', { fullPage: true });
});

test('hardware manager', async ({ page }) => {
  await openApp(page);
  await nav(page, /rp2040 hardware/i).click();
  await expect(page.getByRole('heading', { name: /hardware/i }).first()).toBeVisible();
  await expect(page).toHaveScreenshot('hardware-manager.png', { fullPage: true });
});

test('settings', async ({ page }) => {
  await openApp(page);
  await nav(page, /app settings/i).click();
  await expect(page.getByRole('heading', { name: /application settings/i })).toBeVisible();
  await expect(page).toHaveScreenshot('settings.png', { fullPage: true });
});

test('applied preset state renders correctly', async ({ page }) => {
  await openApp(page);
  await nav(page, /presets library/i).click();
  const card = page
    .getByRole('heading', { name: /framer canvas suite/i })
    .locator('xpath=ancestor::div[contains(@class,"group")][1]');
  await card.getByRole('button', { name: /apply preset/i }).click();
  await nav(page, /presets library/i).click();
  await expect(page.getByRole('button', { name: /^applied$/i })).toHaveCount(1);
  await expect(page).toHaveScreenshot('presets-applied.png', { fullPage: true });
});

test('layout does not overflow horizontally', async ({ page }) => {
  await openApp(page);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  expect(overflow, 'page must not scroll sideways at this viewport').toBeLessThanOrEqual(1);

  for (const name of [/presets library/i, /app settings/i, /rp2040 hardware/i, /keymap studio/i]) {
    await nav(page, name).click();
    const viewOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(viewOverflow, `${String(name)} must not overflow`).toBeLessThanOrEqual(1);
  }
});

test('every interactive control has an accessible name', async ({ page }) => {
  await openApp(page);

  const unnamed = await page.evaluate(() => {
    const controls = Array.from(
      document.querySelectorAll<HTMLElement>('button, input, select, textarea, [role="switch"]')
    );
    return controls
      .filter((el) => {
        if ((el as HTMLButtonElement).disabled) return false;
        if (el.getAttribute('aria-hidden') === 'true') return false;
        const hasLabel =
          el.getAttribute('aria-label') ||
          el.getAttribute('aria-labelledby') ||
          el.getAttribute('title') ||
          (el.textContent || '').trim().length > 0;
        if (hasLabel) return false;
        if (el instanceof HTMLInputElement) {
          return !el.labels || el.labels.length === 0;
        }
        return true;
      })
      .map((el) => `${el.tagName.toLowerCase()}${el.className ? '.' + String(el.className).split(' ')[0] : ''}`);
  });

  expect(unnamed, 'visible controls without an accessible name').toEqual([]);
});
