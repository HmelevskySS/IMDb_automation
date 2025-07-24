import { BasePage } from './BasePage.page';
import { Locator, Page } from '@playwright/test';

/**
 * Page object representing the movie details page.
 */
export class MovieCardPage extends BasePage {
  readonly filmName: Locator;

  constructor(page: Page) {
    super(page);

    this.filmName = page.getByTestId('hero__primary-text');
  }
}
