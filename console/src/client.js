import * as sapper from '@sapper/app';

import './i18n.js'

sapper.start({
	target: document.querySelector('#response')
})
	.then(() => {
		console.log('Welcome to Lavra Response!');
	});
