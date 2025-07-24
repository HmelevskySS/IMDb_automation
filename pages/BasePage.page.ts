import { Locator, Page } from '@playwright/test';

/**
 * BasePage provides common utilities for all page objects.
 */
export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the homepage (`/`).
   */
  async openHomePage() {
    await this.page.goto('/');
  }

  /**
   * Waits for a specified number of milliseconds.
   * @param ms Milliseconds to wait
   */
  async wait(ms: number) {
    await this.page.waitForTimeout(ms);
  }

  /**
   * Waits for the page to finish loading (network idle).
   */
  async waitForPageToBeLoaded() {
    await this.page.waitForLoadState('networkidle');
  }
}
