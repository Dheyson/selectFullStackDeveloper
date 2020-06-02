export default function validate(values) {
	let errors = {};

	if (!values.username) {
		errors.username = 'Name field is required';
	} else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.username) && values.username.length >= 6) {
		errors.username = 'Email address is invalid';
	}

	if (!values.email) {
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 8) {
		errors.password = 'Password must be 8 or more characters';
	}

	if (!values.repeat_password) {
		errors.repeat_password = 'You must repeat the password';
	} else if (values.repeat_password.localeCompare(values.password)) {
		errors.repeat_password = 'Passwords must match';
	}

	return errors;
}
