import {
  HeaderComponent,
  MovieCardPage,
  SearchResultsPage,
} from '../pages/index';
import { expect, test } from '@playwright/test';

test.describe(
  'Search validation',
  {
    tag: ['@search'],
  },
  () => {
    let pageHeader: HeaderComponent;
    let searchResultsPage: SearchResultsPage;
    let moviePage: MovieCardPage;

    test.beforeEach(async ({ page }) => {
      pageHeader = new HeaderComponent(page);
      searchResultsPage = new SearchResultsPage(page);
      moviePage = new MovieCardPage(page);

      await pageHeader.openHomePage();
    });

    test('Verify search result leads to the correct movie page', async () => {
      let filmsNumber;
      let movieToFind = {
        name: 'Inception',
        year: '2010',
      };

      await test.step('Fill the search bar with the search value and click on the "Search"-button', async () => {
        await pageHeader.searchBar.fill(movieToFind.name);
        await pageHeader.searchButton.click();
      });

      await test.step('Verify the "Title"-section on the search results page is not empty', async () => {
        await searchResultsPage.titlesBlock.waitFor({ state: 'visible' });

        filmsNumber = await searchResultsPage.getAmountOfFoundItem(
          searchResultsPage.titlesBlock,
        );

        expect(filmsNumber).toBeGreaterThan(0);
      });

      await test.step('Click the movie name and verify the opened page movie title', async () => {
        await searchResultsPage.openMovieByExactTitle(
          movieToFind.name,
          movieToFind.year,
        );
        await moviePage.filmName.waitFor({ state: 'visible' });

        expect(moviePage.filmName).toHaveText(movieToFind.name);
      });
    });
  },
);
