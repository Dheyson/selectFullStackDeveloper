import React from 'react';
import { useForm } from "react-hook-form";
import InputGroup from '../Input';
import Button from '../../Button';
import Form from 'react-bootstrap/Form';
import * as S from './styles'
import SpanLink from '../../SpanLink';
import axios from 'axios';

import './style.css';

const instance = axios.create({
	baseURL: 'http://localhost:3003/api',
	headers: {
		'Content-Type': 'application/json'
	}
});

const FormContainer = ({ linkTo, onClick }) => {
	const { register, handleSubmit, watch, errors } = useForm({ mode: 'onChange', });

	const onSubmit = async (data) => {
		console.log(data);

		await instance.post('/users', data)
		.then(res => console.log(res.data))
		.catch(err => console.log('Something wrong ', err))
	};

	return (
		<>
			<S.FormHeader>
				Create
				an account:
		</S.FormHeader>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup
					className={`${errors.username && 'error-field'}`}
					name="username"
					title="Name"
					type="text"
					inputText="Your name"
					defaultValue=''
					ref={register({
						required: 'Name field is required', minLength: {
							value: 4,
							message: 'Min lenght must be 4'
						}, pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
					})}
				/>
				{(<S.errorField>{errors.username && errors.username.message}</S.errorField>)}
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
					ref={register({ required: 'Password field is required', minLength: {
						value: 6,
						message: 'It must be minLenght of 6'
					}, })}
				/>
				{(<S.errorField>{errors.password && errors.password.message}</S.errorField>)}
				<InputGroup
					className={`${errors.repeat_password && 'error-field'}`}
					name="repeat_password"
					title="Repeat Password"
					type="password"
					inputText="Type your password"
					defaultValue=''
					ref={register(
						{
							required: 'This field is required',
							minLength: {
								value: 6,
								message: 'It must be minLenght of 6'
							},
							validate: (value) => {
								return value === watch('password') || "The passwords does not match"
							}
						})}
				/>
				{(<S.errorField>{errors.repeat_password && errors.repeat_password.message}</S.errorField>)}
				<SpanLink
					linkLabel="Login"
					text="Already have an account? "
					to={linkTo}
					onClick={onClick} />
				<Button text="Submit" />
			</Form>
		</>
	);
};

export default FormContainer;
