const footerMeetsExpectations = require('./helpers/footer-helper.js');
const settings = require('./config/settings.js');

const CONSTS = {
	pageTitle: 'Indigo Down :: Executive Rock',
	h1: 'INDIGO DOWN',
	navigationClass: 'homeButtons2021',
	nav: [
		{
			text: 'LISTEN',
			url: '/listen',
		},
		{
			text: 'ENTER',
			url: '/home',
		},
	],
};

describe('Landing page', () => {
	beforeAll(async () => {
		await page.goto(settings.siteRoot);
	});

	// check footer
	footerMeetsExpectations();

	test(`page title should be ${CONSTS.pageTitle}`, async () => {
		await expect(page.title()).resolves.toBe(CONSTS.pageTitle);
	});

	test(`h1 heading should contain ${CONSTS.h1}`, async () => {
		const h1Handle = await page.$('h1');
		const h1HTML = await page.evaluate(h1 => h1.innerHTML, h1Handle);
		await expect(h1HTML).toContain(CONSTS.h1);
	});

	test(`nav buttons container with class ${CONSTS.navigationClass} should be on the page`, async () => {
		const navHandle = await page.$(`.${CONSTS.navigationClass}`);
		await expect(navHandle).not.toBeNull();
	});

	for (let navpage of CONSTS.nav) {
		test(`homepage navigation should contain a link to ${navpage.url} with text ${navpage.text}`, async () => {
			const navItemHandle = await page.$(`a[href="${navpage.url}"]`);
			const navItemHTML = await page.evaluate(navItem => navItem.innerText, navItemHandle);
			await expect(navItemHTML).toContain(navpage.text);
		});
	}
});
