import { BasePage } from './BasePage.page';
import { Locator, Page } from '@playwright/test';

/**
 * Page object representing the search results page.
 */
export class SearchResultsPage extends BasePage {
  readonly titlesBlock: Locator;

  constructor(page: Page) {
    super(page);

    this.titlesBlock = page.getByTestId('find-results-section-title');
  }

  /**
   * Returns the number of found items in a given block.
   * @param blockLocator Locator for the block containing results
   * @returns Number of items found
   */
  async getAmountOfFoundItem(blockLocator: Locator) {
    let listOfItems = blockLocator.locator('.find-result-item').count();
    return listOfItems;
  }

  /**
   * Clicks on a movie by exact title. If multiple matches, optionally filters by year.
   * @param title Exact movie title
   * @param year Optional release year for disambiguation
   */
  async openMovieByExactTitle(title: string, year?: string | number) {
    const movieLinks = this.page.getByRole('link', {
      name: title,
      exact: true,
    });
    const numberOfLinks = await movieLinks.count();

    if (numberOfLinks === 1) {
      await movieLinks.click();
      return;
    }

    if (!year) {
      await movieLinks.first().click();
      return;
    }

    const links = await movieLinks.all();
    for (const link of links) {
      const parent = link.locator('..').locator('..');
      const yearElement = parent.getByText(String(year), { exact: false });
      if (await yearElement.count()) {
        await link.click();
        return;
      }
    }
  }
}
