import { useState, useEffect } from 'react';

function useForm(callback, validate) {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const isEnabled = !Object.keys(errors).some(x => errors[x]);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		console.log(values, errors);

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
		if(Object.keys(errors).length === 0) {
			callback();
		}
	}, [errors]);

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
		isEnabled
	}

}

export default useForm;
