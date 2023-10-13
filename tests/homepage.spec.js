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

	footer: [
		{
			name: 'copyright',
			text: '© Indigo Down',
		},
		{
			name: 'social',
			links: [
				{
					title: 'email',
					url: 'mailto:band@indigodown.com?subject=Executive+Greetings',
				},
				{
					title: 'twitter',
					url: 'https://twitter.com/indigodown',
				},
				{
					title: 'instagram',
					url: 'https://instagram.com/indigodownband',
				},
				{
					title: 'facebook',
					url: 'https://www.facebook.com/indigodown/',
				},
				{
					title: 'apple music',
					url: 'https://music.apple.com/gb/artist/indigo-down/97194218',
				},
				{
					title: 'spotify',
					url: 'https://open.spotify.com/artist/21rwqrV2tPxCMJmuFkH4Ya',
				},
				{
					title: 'youtube',
					url: 'https://www.youtube.com/channel/UCky98hNZ8pyElDmgtP6F9pA',
				},
			],
		},
		{
			name: 'credit',
			text: 'Photo: k b photography',
		}
	],
};

describe('Homepage', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:8080/');
	});

	it(`page title should be ${CONSTS.pageTitle}`, async () => {
		await expect(page.title()).resolves.toMatch(CONSTS.pageTitle);
	});

	it(`h1 heading should contain ${CONSTS.h1}`, async () => {
		const h1Handle = await page.$('h1');
		const h1HTML = await page.evaluate(h1 => h1.innerHTML, h1Handle);
		await expect(h1HTML).toContain(CONSTS.h1);
	});

	it(`nav buttons container with class ${CONSTS.navigationClass} should be on the page`, async () => {
		const bodyHandle = await page.$(`.${CONSTS.navigationClass}`);
		await expect(bodyHandle).not.toBeNull();
	});

	for (let navpage of CONSTS.nav) {
		it(`homepage navigation should contain a link to ${navpage.url} with text ${navpage.text}`, async () => {
			const navItemHandle = await page.$(`a[href="${navpage.url}"]`);
			const navItemHTML = await page.evaluate(navItem => navItem.innerText, navItemHandle);
			await expect(navItemHTML).toContain(navpage.text);
		});
	}

	// footer - break this out and use it across all pages
	it(`footer should be on the page`, async () => {
		const footerHandle = await page.$(`footer`);
		await expect(footerHandle).not.toBeNull();
	});
	for (let footerAside of CONSTS.footer) {
		it(`footer should contain aside item ${footerAside.name}`, async () => {
			const footerAsideHandle = await page.$(`footer aside.${footerAside.name}`);
			await expect(footerAsideHandle).not.toBeNull();
		});
		if (footerAside.text) {
			it(`footer aside item ${footerAside.name} should have text ${footerAside.text}`, async () => {
				const footerAsideHandle = await page.$(`footer aside.${footerAside.name}`);
				const footerAsideHTML = await page.evaluate(footerAsideItem => footerAsideItem.innerText, footerAsideHandle);
				await expect(footerAsideHTML).toMatch(footerAside.text);
			});
		}
		if (footerAside.links) {
			for (link of footerAside.links) {
				it(`footer aside item ${footerAside.name} should contain a link with title ${link.title} and url ${link.url}`, async () => {
					const footerLinkHandle = await page.$(`footer aside.${footerAside.name} a[href="${link.url}"][title="${link.title}"]`);
					await expect(footerLinkHandle).not.toBeNull();
				});
			}
		}
	}

});
