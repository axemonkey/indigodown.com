const CONSTS = {
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

const footerMeetsExpectations = () => {
	test(`footer should be on the page`, async () => {
		const footerHandle = await page.$(`footer`);
		await expect(footerHandle).not.toBeNull();
	});

	for (let footerAside of CONSTS.footer) {
		test(`footer should contain aside item ${footerAside.name}`, async () => {
			const footerAsideHandle = await page.$(`footer aside.${footerAside.name}`);
			await expect(footerAsideHandle).not.toBeNull();
		});
		if (footerAside.text) {
			test(`footer aside item ${footerAside.name} should have text ${footerAside.text}`, async () => {
				const footerAsideHandle = await page.$(`footer aside.${footerAside.name}`);
				const footerAsideHTML = await page.evaluate(footerAsideItem => footerAsideItem.innerText, footerAsideHandle);
				await expect(footerAsideHTML).toMatch(footerAside.text);
			});
		}
		if (footerAside.links) {
			for (link of footerAside.links) {
				test(`footer aside item ${footerAside.name} should contain a link with title ${link.title} and url ${link.url}`, async () => {
					const footerLinkHandle = await page.$(`footer aside.${footerAside.name} a[href="${link.url}"][title="${link.title}"]`);
					await expect(footerLinkHandle).not.toBeNull();
				});
			}
		}
	}
};

module.exports = footerMeetsExpectations;
