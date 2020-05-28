const database = require('../config/database');

exports.createUser = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const { rows } = await database.query(
			"INSERT INTO users (name, email, password_user) VALUES ($1, $2, $3)",
			[name, email, password]);

		res.status(201).send({
			message: 'User added successfully!',
			body: {
				user: { name, email, password }
			},
		});
	} catch (error) {
		console.log('Something went wrong', error);
	}
};

exports.listUsers = async (req, res) => {
	try {
		const response = await database.query(
			"SELECT * FROM users ORDER BY name ASC"
		)
		res.status(200).send(response.rows);
	} catch (error) {
		console.log('Something went wrong', error);
	}
};
