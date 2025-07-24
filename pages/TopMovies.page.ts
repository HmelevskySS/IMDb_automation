import { BasePage } from './BasePage.page';
import { Locator, Page } from '@playwright/test';

/**
 * Page object representing the top 250 movies page.
 */
export class TopMoviesPage extends BasePage {
  readonly pageTitle: Locator;
  readonly chartPanel: Locator;
  readonly movieNames: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByText('TopMoviesPage');
    this.chartPanel = page.getByTestId('chart-layout-main-column');
    this.movieNames = this.chartPanel.getByRole('link');
  }
}
