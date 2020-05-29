import React from 'react';

import * as S from './styles';
import Button from '../../components/Button';
import Form from 'react-bootstrap/Form';

const Lead = () => {
	return (
		<div>
			<S.LeadWrapper>
				<S.Header>
					CMS <br />Softmakers
					</S.Header>
				<S.Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate possimus perferendis? Libero id harum molestiae dolorem voluptatem reiciendis, at magni voluptatum debitis hic corporis maxime! Laudantium ut repudiandae distinctio!
					</S.Subtitle>
			</S.LeadWrapper>
			<S.FormWrapper>
				<S.FormHeader>
					Create
					an account:
					</S.FormHeader>
				<Form>
					<Form.Group controlId="formGroupEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Repeat Password</Form.Label>
						<Form.Control type="password" placeholder="Repeat Password" />
					</Form.Group>
					<Button text="Submit" />
				</Form>
			</S.FormWrapper>
		</div>
	)
}

export default Lead;
