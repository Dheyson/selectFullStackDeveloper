import { useState, useEffect } from 'react';
import Axios from 'axios';

function useForm(callback, validate) {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const isEnabled = !Object.keys(errors).some(x => errors[x]);

	const handleLoginSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
	}

	const handleSignUpSubmit = async (event) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		if (Object.keys(errors).length === 0) {
			await Axios.post('localhost:3003/api/users')
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}

	const handleChange = (event) => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
	};

	// const handleBlur = (field) => (evt) => {
	// 	evt.persist();
	// 	setValues({
	// 		touched: { ...errors.touch, [field]: true },
	// 	});
	// }

	useEffect(() => {
		if (Object.keys(errors).length === 0) {
			callback();
		}
	}, [errors]);

	return {
		handleChange,
		handleLoginSubmit,
		handleSignUpSubmit,
		values,
		errors,
		isEnabled
	}

}

export default useForm;
