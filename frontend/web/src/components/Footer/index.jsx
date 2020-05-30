import React from 'react';

import * as S from './styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = ({color}) => {
	return (
		<S.Wrapper>
			<Row>
				<Col xs={12} sm={12}>
					<S.Info color={color}>
						Created by Dheyson Alves, follow him at <a href="https://github.com/Dheyson">github</a>
					</S.Info>
				</Col>
			</Row>
		</S.Wrapper>
	);
}

export default Footer;
