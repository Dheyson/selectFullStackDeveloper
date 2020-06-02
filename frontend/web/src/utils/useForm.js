import { useState, useEffect } from 'react';

function useForm(callback, validate) {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const isEnabled = !Object.keys(errors).some(x => errors[x]);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setIsSubmitting(true);
		setErrors(validate(values));
	}

	const handleChange = (event) => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
	};

	const handleBlur = (field) => (evt) => {
		evt.persist();
		setValues({
			touched: { ...errors.touch, [field]: true },
		});
	}

	useEffect(() => {
		if(Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	return {
		handleChange,
		handleSubmit,
		handleBlur,
		values,
		errors,
		isEnabled
	}

}

export default useForm;
