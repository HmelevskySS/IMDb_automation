import { BasePage } from '../BasePage.page';
import { Locator, Page } from '@playwright/test';

/**
 * Page object for the header component containing the search bar.
 */
export class HeaderComponent extends BasePage {
  readonly searchBar: Locator;
  readonly searchButton: Locator;
  readonly menuButton: Locator;
  readonly menuPanel: Locator;
  readonly topMoviesLink: Locator;

  constructor(page: Page) {
    super(page);

    // Search bar locators
    this.searchBar = page.getByTestId('suggestion-search');
    this.searchButton = page.getByLabel('Submit search');

    // Menu panel locators
    this.menuButton = page.getByLabel('Open navigation drawer');
    this.menuPanel = page.getByTestId('panel').first();
    this.topMoviesLink = page.getByLabel('Go to Top 250 movies');
  }
}
