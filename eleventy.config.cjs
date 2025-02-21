const icons = require('svg-social-icons');

const socialIconsSelection = ['email', 'twitter', 'instagram', 'facebook', 'itunes', 'spotify', 'youtube'];
const socialIcons = {};

for (const thisIcon of socialIconsSelection) {
	socialIcons[thisIcon] = icons(thisIcon, {color: '#ffffff'});
}

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/public');
	eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setServerOptions({
		// liveReload: false,
		watch: [
			'src/public/**/*',
		],
		showVersion: true,
	});

	eleventyConfig.addNunjucksGlobal('socialIcons', socialIcons);

	return {
		dir: {
			includes: "_includes",
			layouts: "_layouts",
		}
	}
};
