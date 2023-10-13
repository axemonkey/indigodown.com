const logoMeetsExpectations = require('./helpers/logo-helper.js');
const footerMeetsExpectations = require('./helpers/footer-helper.js');
const mainNavMeetsExpectations = require('./helpers/mainnav-helper.js');
const settings = require('./config/settings.js');

const CONSTS = {
	pageTitle: 'Indigo Down :: Video',
  h1: 'INDIGO DOWN',
  h2: 'The Videos',
};

describe('Home page', () => {
	beforeAll(async () => {
    await page.goto(`${settings.siteRoot}/video/`);
	});

	// check footer
	footerMeetsExpectations();

  // check logo/h1
  logoMeetsExpectations();

  // check main nav
  mainNavMeetsExpectations('video');

	test(`page title should be ${CONSTS.pageTitle}`, async () => {
		await expect(page.title()).resolves.toBe(CONSTS.pageTitle);
	});

	test(`h2 heading should contain ${CONSTS.h2}`, async () => {
		const h2Handle = await page.$('h2');
		const h2HTML = await page.evaluate(h2 => h2.innerText, h2Handle);
		await expect(h2HTML).toContain(CONSTS.h2);
	});
});
