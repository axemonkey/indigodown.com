const logoMeetsExpectations = require('./helpers/logo-helper.js');
const footerMeetsExpectations = require('./helpers/footer-helper.js');
const mainNavMeetsExpectations = require('./helpers/mainnav-helper.js');
const settings = require('./config/settings.js');

const CONSTS = {
	pageTitle: 'Indigo Down :: Band',
  h1: 'INDIGO DOWN',
  h2: 'The Band',
  h3: [
    'Jez Fielder – Vocals &amp; Guitar',
    'Clive Murray – Guitar &amp; Vocals',
    'Martin Szomszor – Bass &amp; Vocals',
    'Paul Fielder – Drums &amp; Vocals',
  ],
};

describe('Home page', () => {
	beforeAll(async () => {
    await page.goto(`${settings.siteRoot}/band/`);
	});

	// check footer
	footerMeetsExpectations();

  // check logo/h1
  logoMeetsExpectations();

  // check main nav
  mainNavMeetsExpectations('band');

	test(`page title should be ${CONSTS.pageTitle}`, async () => {
		await expect(page.title()).resolves.toBe(CONSTS.pageTitle);
	});

	test(`h2 heading should contain ${CONSTS.h2}`, async () => {
		const h2Handle = await page.$('h2');
		const h2HTML = await page.evaluate(h2 => h2.innerText, h2Handle);
		await expect(h2HTML).toContain(CONSTS.h2);
	});

  for (bandMember of CONSTS.h3) {
    test(`band member ${bandMember} should be on the page`, async () => {
      const pageCopyHandle = await page.$('.copy-panel');
      const pageCopyHTML = await page.evaluate(pageCopy => pageCopy.innerHTML, pageCopyHandle);
      await expect(pageCopyHTML).toContain(`<h3>${bandMember}</h3>`);
    });
  }
});
