import React from 'react';

import InputGroup from '../Input';
import Button from '../../Button';
import Form from 'react-bootstrap/Form';
import * as S from './styles'
import SpanLink from '../../SpanLink';
import validate from '../ValidationRules';
import useForm from '../../../utils/useForm';
import './style.css';

const FormContainer = ({ linkTo, onClick }) => {
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
		isEnabled,
		handleBlur
	} = useForm(signUp, validate);

	function signUp() {
		console.log('No errors, submit callback called!');
	}

	const shouldMarkError = field => {
		const hasError = errors[field];
		const shouldShow = errors.touch[field];

		return hasError ? shouldShow : false;
	};

	return (
		<>
			<S.FormHeader>
				Create
				an account:
		</S.FormHeader>
			<Form onSubmit={handleSubmit}>
				<InputGroup
					className={`${errors.username && 'error-field'}`}
					name="username"
					title="Name"
					type="text"
					inputText="Your name"
					value={values.username || ''}
					handleChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.username && (<S.errorField>{errors.username}</S.errorField>)}
				<InputGroup
					className={`${errors.email && 'error-field'}`}
					name="email"
					title="Email"
					type="email"
					inputText="Email"
					value={values.email || ''}
					handleChange={handleChange}
				/>
				{errors.email && (<S.errorField>{errors.email}</S.errorField>)}
				<InputGroup
					className={`${errors.password && 'error-field'}`}
					name="password"
					title="Password"
					type="password"
					inputText="Your password"
					value={values.password || ''}
					handleChange={handleChange}
				/>
				{errors.password && (<S.errorField>{errors.password}</S.errorField>)}
				<InputGroup
					className={`${errors.repeat_password && 'error-field'}`}
					name="repeat_password"
					title="Repeat Password"
					type="password"
					inputText="Type your password"
					value={values.repeat_password || ''}
					handleChange={handleChange}
				/>
				{errors.repeat_password && (<S.errorField>{errors.repeat_password}</S.errorField>)}
				<SpanLink linkLabel="Login" text="Already have an account? " to={linkTo} onClick={onClick} />
				<Button text="Submit" disabled={!isEnabled} />
			</Form>
		</>
	);
};

export default FormContainer;
