import { BasePage } from './BasePage.page';
import { Locator, Page } from '@playwright/test';

/**
 * Page object representing the movie details page.
 */
export class MovieCardPage extends BasePage {
  readonly filmName: Locator;
  readonly contentBlock: Locator;
  readonly topRatingBlock: Locator;
  readonly releaseYear: Locator;

  constructor(page: Page) {
    super(page);

    this.filmName = page.getByTestId('hero__primary-text');
    this.contentBlock = page.getByTestId('hero-parent');
    this.topRatingBlock = page
      .getByTestId('hero-rating-bar__aggregate-rating__score')
      .first();
    this.releaseYear = page.locator('a[href*="releaseinfo"]').first();
  }
}
