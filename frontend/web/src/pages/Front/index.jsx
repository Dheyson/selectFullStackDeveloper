import React from 'react';

import * as S from './styles';
import Footer from '../../components/Footer'
import FormContainer from '../../components/Form/FormContainer';

const Front = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<S.Image src={require('../../assets/images/logo-web.png')} alt="" srcSet="" />
			</S.Wrapper>
			<S.FormBackground>
				<FormContainer />
			</S.FormBackground>
			<Footer color="#6E0E0A"/>
		</S.Container>
	);
}

export default Front;
