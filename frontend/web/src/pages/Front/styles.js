import styled from 'styled-components';
import imgDesktop from '../../assets/images/bg-intro-desktop.png';
import imgMobile from '../../assets/images/bg-intro-mobile.png';

export const Container = styled.div`
	background-image: url(${imgMobile});
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
	min-height: 100vh;
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

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 40px;
`;

export const FormBackground = styled.div`
	background-color: #ffffff;
	border: 2px solid #333333;
	border-radius: 10px;
	padding: 20px;
	margin-left: 25px;
	margin-right: 25px;
`;

export const Image = styled.img`
`

