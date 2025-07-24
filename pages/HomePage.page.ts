import { BasePage } from './BasePage.page';
import { Locator, Page } from '@playwright/test';

/**
 * Page object representing the Home page.
 */
export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);

    // Here we can define locator for the homepage.
  }
}
