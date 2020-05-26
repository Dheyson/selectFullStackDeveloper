const database = require('../config/database');

const createUser = async (req, res) => {
	const { name, user_name } = req.body;

	const { rows } = database.query("INSERT INTO users (name, user_name, password) VALUES ($1, $2, $3)", [name, user_name, password]);

	res.status(201).send({
		message: 'User added successfully!',
		body: {
			user: { name, user_name, password}
		},
	});
};

module.exports = createUser;
