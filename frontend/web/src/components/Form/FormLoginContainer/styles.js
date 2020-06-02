import styled from 'styled-components';

export const FormHeader = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 36px;
	color: #333333;
	margin-bottom: 24px;

	@media (min-width: 1440px) {
		font-size: 36px;
		line-height: 54px;
  }
`;

export const errorField = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;
	text-align: right;
	color: #E54039;
`;
