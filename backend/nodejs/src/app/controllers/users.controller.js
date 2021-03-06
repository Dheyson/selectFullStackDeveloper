const Yup = require('yup');
const { users } =  require('../../database/models');

module.exports.createUser = async (req, res) => {
	const schema = Yup.object().shape({
		username: Yup.string()
		.required()
		.min(4),
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
	const userExists = await users.findOne({ where: { email: email } });

	try {
		if (userExists) {
			return res.status(400).json({ error: 'User already exists.' });
		}

		let response = await users.create({
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
	const Users = await users.findAll();
	return res.status(200).send(Users);
}

module.exports.getUser = async (req, res) => {
	const user = await users.findByPk(
		req.params.id,
	);
	res.status(200).send({
		message: 'User was found!',
		body: user
	});
}

module.exports.update = async ( req, res ) => {

	const schema = Yup.object().shape({
		username: Yup.string(),
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
	const user = await users.findByPk( req.params.id );

	if ( email == user.email ) {
		const userExists = await users.findOne({
			where: { email,  },
		});
		if ( userExists ) {
			return res.status( 400 ).json({ error: 'User already exists.' });
		}
	}

	if ( oldPassword && !( await users.comparePassword( oldPassword ))) {
		return res.status( 401 ).json({ error: 'Password does not match.' });
	}

	const { id, username, password } = await users.update( req.body, {
		where: { id: user.id }
	});

	return res.json({ id, username, email, password });
}

