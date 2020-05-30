import React from 'react';

import InputGroup from '../Input';
import Button from '../../Button';
import Form from 'react-bootstrap/Form';

const FormContainer = () => {
	return (
		<Form>
			<InputGroup name="name" title="Name" type="text" inputText="Your name" />
			<InputGroup name="email" title="Email" type="email" inputText="youremail@domain.com" />
			<InputGroup name="password" title="Password" type="password" inputText="Your password" />
			<InputGroup name="password" title="Repeat Password" type="password" inputText="Type your password" />
			<Button text="Submit" />
		</Form>
	);
};

export default FormContainer;
