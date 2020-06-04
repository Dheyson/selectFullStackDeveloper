import React from 'react';

import InputGroup from '../Input';
import Button from '../../Button';
import Form from 'react-bootstrap/Form';
import SpanLink from '../../SpanLink';
import * as S from './styles';
import { useForm } from "react-hook-form";

import './style.css';

const FormLoginContainer = ({ linkTo, onClick }) => {
	const { register, handleSubmit, errors } = useForm({ mode: 'onChange', });
	const onSubmit = data => console.log(data);

	return (
		<>
			<S.FormHeader>
				Login
		</S.FormHeader>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup
					className={`${errors.email && 'error-field'}`}
					name="email"
					title="Email"
					type="email"
					inputText="Email"
					defaultValue=''
					ref={register({
						required: 'Email field is required',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'This field must be a email'
						}
					})}
				/>
				{(<S.errorField>{errors.email && errors.email.message}</S.errorField>)}
				<InputGroup
					className={`${errors.password && 'error-field'}`}
					name="password"
					title="Password"
					type="password"
					inputText="Your password"
					defaultValue=''
					ref={register({
						required: 'Password is required', minLength: {
							value: 8,
							message: 'It must be minLenght of 8'
						},
					})}
				/>
				{(<S.errorField>{errors.password && errors.password.message}</S.errorField>)}
				<Button text="Submit" />
				<SpanLink
					linkLabel="Register"
					text="Don't have an account? "
					to={linkTo}
				/>
			</Form>
		</>
	);
};

export default FormLoginContainer;
