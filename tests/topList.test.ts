import { HeaderComponent, MovieCardPage, TopMoviesPage } from '../pages/index';
import { expect, test } from '@playwright/test';

test.describe(
  'Validate Top 250 list page',
  {
    tag: ['@top_list', '@movie_page'],
  },
  () => {
    let pageHeader: HeaderComponent;
    let topMoviesPage: TopMoviesPage;
    let moviePage: MovieCardPage;

    test.beforeEach(async ({ page }) => {
      pageHeader = new HeaderComponent(page);
      topMoviesPage = new TopMoviesPage(page);
      moviePage = new MovieCardPage(page);

      await pageHeader.openHomePage();
    });

    test('Verify movie from the Top 250 list contains all the required parameters', async () => {
      await test.step('Open the burger menu and click on the "Top 250 Movies"-link', async () => {
        await pageHeader.menuButton.click();

        expect(pageHeader.menuPanel).toBeVisible();

        await pageHeader.topMoviesLink.click();
      });

      await test.step('Open the first movie on the page', async () => {
        await topMoviesPage.movieNames.first().click();
      });

      await test.step('Verify movie title, rating and release year are displayed on the page', async () => {
        await moviePage.contentBlock.waitFor({ state: 'visible' });

        expect(moviePage.filmName).toBeVisible();
        expect(moviePage.topRatingBlock).toBeVisible();
        expect(moviePage.releaseYear).toBeVisible();
      });
    });
  },
);
