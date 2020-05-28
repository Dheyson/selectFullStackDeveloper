const dotenv = require('dotenv');

const { Pool } = require('pg');

dotenv.config();

// ==> Database connection

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
	console.log('Database connected sucessfuly...');
});

module.exports = {
	query: (text, params) => pool.query(text, params),
};
