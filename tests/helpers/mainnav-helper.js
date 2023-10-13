const CONSTS = {
  nav: {
    className: 'main-nav',
    items: [
      'home',
      'music',
      'video',
      'band',
    ],
  },
};

const mainNavMeetsExpectations = currentPage => {
  test(`main nav should be on the page`, async () => {
    const mainNavHandle = await page.$(`nav ul.${CONSTS.nav.className}`);
    await expect(mainNavHandle).not.toBeNull();
  });

  test(`main nav should have class current-${currentPage}`, async () => {
    const mainNavHandle = await page.$(`nav ul.${CONSTS.nav.className}.current-${currentPage}`);
    await expect(mainNavHandle).not.toBeNull();
  });

	for (let mainNavItem of CONSTS.nav.items) {
    test(`main nav should contain item ${mainNavItem} with href /${mainNavItem} and in a list item with class ${mainNavItem}`, async () => {
      const navItemHandle = await page.$(`.${CONSTS.nav.className} li.${mainNavItem} a[href="/${mainNavItem}"]`);
			await expect(navItemHandle).not.toBeNull();
		});
	}
};

module.exports = mainNavMeetsExpectations;
