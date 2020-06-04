import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import imgDesktop from '../../assets/images/bg-intro-desktop.png';
import imgMobile from '../../assets/images/bg-intro-mobile.png';

export const ColBackground = styled(Col)`
	display: flex;
	background-image: url(${imgMobile});
	position: relative;
	@media (min-width: 1440px) {
    background-image: url(${imgDesktop});
	}

	&:before {
	background-color : #F2BB05;
	z-index: -1;
	content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
	}
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 40px;
	margin: auto;
`;

export const Header = styled.h1`
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 54px;
	color: #333333;

	@media (min-width: 900px) {
    font-weight: 600;
		font-size: 72px;
		line-height: 108px;
		margin: 0 auto;
  }
`;

export const Subtitle = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: #333333;

@media (min-width: 1440px) {
    font-size: 16px;
		line-height: 24px;
		width: 400px;
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

