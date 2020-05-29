const User = require('../../models/users');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		res.status(400).send({ msg: 'Please pass the fields data!' });
	} else {
		try {
			const response = await User.create({
				username: username,
				email: email,
				password: password
			});

			res.status(201).send({
				message: 'User added successfully!',
				body: {
					user: response
				},
			});
		} catch (error) {
			console.log('Something went wrong', error);
			res.status(400).send(error);
		}
	}
};

exports.loginUser = (req, res) => {
	const { password } = req.body;

	User.findByLogin()
		.then((user) => {
			if (!user) {
				return res.status(401).send({
					message: 'Authentication failed. User not found!'
				})
			}
			User.comparePassword(password, (err, isMatch) => {
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
