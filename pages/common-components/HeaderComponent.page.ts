import { BasePage } from '../BasePage.page';
import { Locator, Page } from '@playwright/test';

/**
 * Page object for the header component containing the search bar.
 */
export class HeaderComponent extends BasePage {
  readonly searchBar: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);

    this.searchBar = page.getByTestId('suggestion-search');
    this.searchButton = page.getByLabel('Submit search');
  }
}
