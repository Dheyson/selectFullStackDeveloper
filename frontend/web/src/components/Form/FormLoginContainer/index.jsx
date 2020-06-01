import React from 'react';

import InputGroup from '../Input';
import Button from '../../Button';
import Form from 'react-bootstrap/Form';
import SpanLink from '../../SpanLink';
import * as S from './styles';

const FormLoginContainer = ({linkTo, onClick}) => {
	return (
		<>
			<S.FormHeader>
				Login
		</S.FormHeader>
			<Form>
				<InputGroup name="email" title="Email" type="email" inputText="Email" />
				<InputGroup name="password" title="Password" type="password" inputText="Your password" />
				<Button text="Submit" />
				<SpanLink linkLabel="Register" text="Don't have an account? " to={linkTo} onClick={onClick}/>
			</Form>
		</>
	);
};

export default FormLoginContainer;
