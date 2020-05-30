import React from 'react';

import * as S from './styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormContainer from '../../components/Form/FormContainer';

const Lead = () => {
	return (
		<Row>
			<S.ColBackground xs={12} sm={12} md={7}>
				<S.Header>
					CMS <br />Softmakers
					</S.Header>
				<S.Subtitle>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate possimus perferendis? Libero id harum molestiae dolorem voluptatem reiciendis, at magni voluptatum debitis hic corporis maxime! Laudantium ut repudiandae distinctio!
					</S.Subtitle>
			</S.ColBackground>

			<Col xs={12} sm={12} md={5}>
				<S.FormWrapper>
					<S.FormHeader>
						Create
						an account:
					</S.FormHeader>
					<FormContainer />
				</S.FormWrapper>
			</Col>
		</Row>
	)
}

export default Lead;
