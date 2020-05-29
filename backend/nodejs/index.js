import 'dotenv/config';
import models, { sequelize } from './models';

const PORT = process.env.PORT || 3000;

const app = require('./src/app');

sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}...`);
	});
});
