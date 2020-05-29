import React from 'react';

import * as S from './styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
	return (
		<S.Wrapper>
			<Row>
				<Col xs={12} sm={12}>
					<S.Info>
						Created by Dheyson Alves, follow him at <a href="#">github</a>
					</S.Info>
				</Col>
			</Row>
		</S.Wrapper>
	);
}

export default Footer;
