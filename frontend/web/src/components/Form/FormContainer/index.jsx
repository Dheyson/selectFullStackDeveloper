import React from 'react';

import InputGroup from '../Input';
import Button from '../../Button';
import Form from 'react-bootstrap/Form';
import * as S from './styles'
import SpanLink from '../../SpanLink';

const FormContainer = ({ linkTo, onClick }) => {
	return (
		<>
		<S.FormHeader>
			Create
			an account:
		</S.FormHeader>
		<Form>
			<InputGroup name="name" title="Name" type="text" inputText="Your name" />
			<InputGroup name="email" title="Email" type="email" inputText="youremail@domain.com" />
			<InputGroup name="password" title="Password" type="password" inputText="Your password" />
			<InputGroup name="repeat password" title="Repeat Password" type="password" inputText="Type your password" />
			<SpanLink linkLabel="Login" text="Already have an account? " to={linkTo} onClick={onClick} />
			<Button text="Submit" />
		</Form>
		</>
	);
};

export default FormContainer;
