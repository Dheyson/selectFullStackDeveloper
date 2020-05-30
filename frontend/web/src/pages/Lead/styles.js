import styled from 'styled-components';
import Image from '../../assets/images/bg-intro-mobile.png';
import Col from 'react-bootstrap/Col';

export const ColBackground = styled(Col)`
	background-color: #F2BB05;
`;

export const InfoWrapper = styled.div`
	@media (min-width: 1440px) {
    padding: 40px;
  }
`;

export const Header = styled.h1`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 54px;
	color: #333333;

	@media (min-width: 1440px) {
    font-weight: 600;
		font-size: 72px;
		line-height: 108px;
  }
`;

export const Subtitle = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: #333333;

@media (min-width: 1440px) {
    font-size: 16px;
		line-height: 24px;
  }
`;

export const FormWrapper = styled.div`
	padding: 40px 16px 40px 16px;

	@media (min-width: 1440px) {
    display: flex;
		flex-direction: column;
		align-items: center;
  }
`;

export const FormHeader = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	color: #333333;
	margin-bottom: 24px;

	@media (min-width: 1440px) {
		font-size: 36px;
		line-height: 54px;
  }
`;

