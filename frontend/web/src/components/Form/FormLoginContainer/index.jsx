import React from 'react';

import InputGroup from '../Input';
import Button from '../../Button';
import Form from 'react-bootstrap/Form';
import SpanLink from '../../SpanLink';
import * as S from './styles';
import validate from '../ValidationRules';
import useForm from '../../../utils/useForm';
import './style.css';

const FormLoginContainer = ({ linkTo, onClick }) => {
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(login, validate);

	function login() {
		console.log('No errors, submit callback called!');
		console.log(values);
	}

	return (
		<>
			<S.FormHeader>
				Login
		</S.FormHeader>
			<Form onSubmit={handleSubmit}>
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
				<Button text="Submit" />
				<SpanLink
					linkLabel="Register"
					text="Don't have an account? "
					to={linkTo}
					onClick={onClick} />
			</Form>
		</>
	);
};

export default FormLoginContainer;
