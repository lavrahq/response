import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import dotenv from 'dotenv';
import * as sapper from '@sapper/server';

import './tailwind.css'
import './i18n.js'

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

dotenv.config()

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => {
				const api_host = process.env.API_HOST;

				return {
					api_host,
					logged_in: false,
					user: {}
				}
			}
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
