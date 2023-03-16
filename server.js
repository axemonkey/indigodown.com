import {indigodownApp} from './indigodown.com/app.js';

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	indigodownApp.listen(7777);
} else if (env === 'production') {
	indigodownApp.listen(process.env.PORT);
}
