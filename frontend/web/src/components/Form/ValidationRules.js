export default function validate(values) {
	let errors = {};
	errors.touch = {
		username: false,
		email: false,
		password: false,
		repeat_password: false
	}

	if (!values.username) {
		errors.username = 'Name field is required';
	} else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.username) && values.username.length >= 6) {
		errors.username = 'Email address is invalid';
	} else {
		errors.repeat_password = '';
	}

	if (!values.email) {
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	} else {
		errors.email = '';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 8) {
		errors.password = 'Password must be 8 or more characters';
	} else {
		errors.password = '';
	}

	if (!values.repeat_password) {
		errors.repeat_password = 'You must repeat the password';
	} else if (values.repeat_password.localeCompare(values.password)) {
		errors.repeat_password = 'Passwords must match';
	} else {
		errors.repeat_password = '';
	}

	return errors;
}
