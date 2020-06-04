import React from 'react';

import * as S from './styles';
import Footer from '../../components/Footer'
import FormLoginContainer from '../../components/Form/FormLoginContainer';

const Front = () => {

	return (
		<S.Container>
			<S.Wrapper>
				<S.Image
					src={require('../../assets/images/logo-web.png')}
					alt="logotype page"
					srcSet="" />
			</S.Wrapper>
			<S.FormBackground>
				<FormLoginContainer linkTo={"/"} />
			</S.FormBackground>
			<Footer color="#6E0E0A" />
		</S.Container>
	);
}

export default Front;
