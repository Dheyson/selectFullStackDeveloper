const Yup = require('yup');
const { Users } =  require('../../models');

module.exports.createUser = async (req, res) => {
	const schema = Yup.object().shape({
		name: Yup.string().required(),
		email: Yup.string()
			.email()
			.required(),
		password: Yup.string()
			.required()
			.min(6),
	});

	if (!(await schema.isValid(req.body))) {
		return res.status(400).json({ error: 'Validation fails' });
	}

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

module.exports.getUsers = async (req, res) => {
	const users = await Users.findAll();
	return res.status(200).send(users);
}

module.exports.getUser = async (req, res) => {
	const user = await Users.findByPk(
		req.params.id,
	);
	res.status(200).send({
		message: 'User was found!',
		body: user
	});
}

module.exports.update = async (req, res) => {
	const schema = Yup.object().shape({
		name: Yup.string(),
		email: Yup.string().email(),
		oldPassword: Yup.string().min(6),
		password: Yup.string()
			.min(6)
			.when('oldPassword', (oldPassword, field) =>
				oldPassword ? field.required() : field
			),
		confirmPassword: Yup.string().when('password', (password, field) =>
			password ? field.required().oneOf([Yup.ref('password')]) : field
		),
	});

	if (!(await schema.isValid(req.body))) {
		return res.status(400).json({ error: 'Validation fails' });
	}

	const { email, oldPassword } = req.body;
	const user = await Users.findByPk(req.userId);

	if (email !== user.email) {
		const userExists = await Users.findOne({
			where: { email },
		});
		if (userExists) {
			return res.status(400).json({ error: 'User already exists.' });
		}
	}
	if (oldPassword && !(await Users.comparePassword(oldPassword))) {
		return res.status(401).json({ error: 'Password does not match.' });
	}

	const { id, name } = await Users.update(req.body);

	return res.json({ id, name, email });
}

