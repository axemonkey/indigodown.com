const logoMeetsExpectations = require('./helpers/logo-helper.js');
const footerMeetsExpectations = require('./helpers/footer-helper.js');
const mainNavMeetsExpectations = require('./helpers/mainnav-helper.js');
const settings = require('./config/settings.js');

const CONSTS = {
	pageTitle: 'Indigo Down :: Home',
	h1: 'INDIGO DOWN',
	h2: 'Hi. We’re Indigo Down.',
};

describe('Home page', () => {
	beforeAll(async () => {
		await page.goto(`${settings.siteRoot}/home/`);
	});

	// check footer
	footerMeetsExpectations();

	// check logo/h1
	logoMeetsExpectations();

	// check main nav
	mainNavMeetsExpectations('home');

	test(`page title should be ${CONSTS.pageTitle}`, async () => {
		await expect(page.title()).resolves.toBe(CONSTS.pageTitle);
	});

	test(`h2 heading should contain ${CONSTS.h2}`, async () => {
		const h2Handle = await page.$('h2');
		const h2HTML = await page.evaluate((h2) => h2.innerText, h2Handle);
		await expect(h2HTML).toContain(CONSTS.h2);
	});
});
