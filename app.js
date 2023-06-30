// import path from 'path';
// import express from 'express';
// import hbs from 'handlebars';
// import {engine} from 'express-handlebars';
// import moment from 'moment';
// import icons from 'svg-social-icons';

// const appFolder = `${path.resolve()}/indigodown.com`;
// const indigodownApp = express();
// const env = process.env.NODE_ENV || 'development';
// // const pages2021 = ['home', 'gigs', 'music', 'video', 'band'];
// const pages2021 = ['home', 'music', 'video', 'band'];

// const socialIconsSelection = ['email', 'twitter', 'instagram', 'facebook', 'itunes', 'spotify', 'youtube'];
// const socialIcons = {};
// for (const thisIcon of socialIconsSelection) {
// 	socialIcons[thisIcon] = icons(thisIcon, {color: '#ffffff'});
// }

// hbs.registerHelper('eq', function (a, b) {
// 	return (a === b);
// });

// indigodownApp.engine('hbs', engine({
// 	extname: 'hbs',
// }));
// indigodownApp.set('views', `${appFolder}/views`);
// indigodownApp.set('view engine', 'hbs');
// indigodownApp.use(express.static(`${appFolder}/public`));

// const currentYear = moment().format('YYYY');
// const copyYear = (Number.parseInt(currentYear, 10) > 2021 ? `2021–${currentYear}` : currentYear);

// const makeTitle = title => {
// 	return `${title}${(env === 'development' ? ' :: DEV' : '')}`;
// };

// const ucfirst = string => {
// 	return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
// };

// const renderReleasePage = res => {
// 	res.render('release', {
// 		title: makeTitle('STILL ALIVE – OUT NOW'),
// 		currentYear,
// 		layout: 'release-layout',
// 	});
// };

// indigodownApp.get('/', (req, res) => {
// 	res.render('2021/index', {
// 		layout: 'index2021-layout',
// 		copyYear,
// 		page: 'index2021',
// 		pageTitle: makeTitle('Indigo Down :: Executive Rock'),
// 		socialIcons,
// 	});
// });

// // indigodownApp.get('/2021/:page?', (req, res) => {
// //   const page = req.params.page;
// //   res.render(`2021/${page}`, {
// //     layout: 'index2021-layout',
// //     copyYear,
// //     page: page.toString(),
// //     pages2021,
// //     socialIcons,
// //   });
// // });

// indigodownApp.get('/:page?', (req, res) => {
// 	const page = req.params.page;
// 	if (page === 'release' || page === 'listen' || page === 'still-alive') {
// 		renderReleasePage(res);
// 	} else {
// 		res.render(`2021/${page}`, {
// 			layout: 'index2021-layout',
// 			copyYear,
// 			page,
// 			pageTitle: makeTitle(`Indigo Down :: ${ucfirst(page)}`),
// 			pages2021,
// 			socialIcons,
// 		});
// 	}
// });

// // exports.app = app;

// export {indigodownApp};
