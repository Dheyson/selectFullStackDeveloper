const jwt = require('jsonwebtoken');
import { Users } from '../../models/';

exports.createUser = async (req, res) => {
	const { username, email, password } = req.body;
	const userExists = await User.findOne({ where: { email: email } });

	try {
		if (userExists) {
			return res.status(400).json({ error: 'User already exists.' });
		}

		let response = await Users.create({
			username,
			email,
			password,
		});
		res.status(201).send({
			message: 'User added successfully!',
			body: {
				user: response
			},
		});
	} catch (error) {
		res.status(400).send({
			message: 'Something went wrong',
			body: error
		});
	}
};

exports.getUsers = async (req, res) => {
	const users = await Users.findAll();
	return res.send(users);
}

exports.getUser = async (req, res) => {
	const user = await Users.findByPk(
		req.params.id,
	);
	res.status(200).send({
		message: 'User was found!',
		body: user
	});
}

exports.loginUser = (req, res) => {
	const { password } = req.body;

	Users.findByLogin()
		.then((user) => {
			if (!user) {
				return res.status(401).send({
					message: 'Authentication failed. User not found!'
				})
			}
			Users.comparePassword(password, (err, isMatch) => {
				if (isMatch && !err) {
					let token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', { expiresIn: 86400 * 30 });

					jwt.verify(token, 'nodescretauth', (err, data) => {
						console.log(err, data);
					});
					res.json({ sucess: true, token: 'JWT' + token });
				} else {
					res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
				}
			})
		})
		.catch((error) => {
			res.status(400).send(error)
		})
};
