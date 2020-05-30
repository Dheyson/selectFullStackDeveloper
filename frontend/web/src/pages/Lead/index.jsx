import React from 'react';

import * as S from './styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormContainer from '../../components/Form/FormContainer';

import SpanLink from '../../components/SpanLink';

const Lead = () => {
	return (
		<Row>
			<S.ColBackground xs={12} sm={12} md={7}>
				<S.InfoWrapper>
					<S.Header>
						CMS <br />Softmakers
					</S.Header>
					<S.Subtitle>
						A content management system (CMS) is a software application that can be used to manage the creation and modification of digital content. CMSs are typically used for enterprise content management (ECM) and web content management (WCM).
					</S.Subtitle>
				</S.InfoWrapper>
			</S.ColBackground>

			<Col xs={12} sm={12} md={5}>
				<S.FormWrapper>
					<S.FormHeader>
						Create
						an account:
					</S.FormHeader>
					<FormContainer />
					<SpanLink text="Already have an account?" link="Github" href="https://github.com/Dheyson" />
				</S.FormWrapper>
			</Col>
		</Row>
	)
}

export default Lead;
