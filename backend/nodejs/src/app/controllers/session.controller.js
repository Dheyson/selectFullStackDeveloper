const jwt = require('jsonwebtoken');
const authConf = require('../../config/auth.token');
const { User } = require('../../database/models');

export default async function store(req, res) {
	const { email, password } = req.body;

	const user = await User.findOne({ where: { email } });
	if (!user) {
		return res.status(401).json({ error: 'User not found' });
	}

	if (!(await user.comparePassword(password))) {
		return res.status(401).json({ error: 'Password does not match!' });
	}

	const { id, username } = user;

	return res.json({
		user: {
			id,
			username,
			email,
		},
		token: jwt.sign({ id }, authConf.secret, {
			expiresIn: authConf.expireIn,
		}),
	});
}
