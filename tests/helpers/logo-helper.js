const CONSTS = {
	logo: {
		text: 'INDIGO DOWN',
		url: '/',
	},
};

const logoMeetsExpectations = () => {
	test(`band name h1 should link to front page`, async () => {
		const h1Handle = await page.$('h1');
		const h1HTML = await page.evaluate((h1) => h1.innerText, h1Handle);
		await expect(h1HTML).toContain(CONSTS.logo.text);

		const h1LinkHandle = await page.$('h1 a');
		const h1LinkHTML = await page.evaluate(
			(h1Link) => h1Link.outerHTML,
			h1LinkHandle
		);
		await expect(h1LinkHTML).toContain(`href="${CONSTS.logo.url}"`);
	});
};

module.exports = logoMeetsExpectations;
