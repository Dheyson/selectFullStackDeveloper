import React, { useState } from 'react';

import * as S from './styles';
import Footer from '../../components/Footer'
import FormContainer from '../../components/Form/FormContainer';
import FormLoginContainer from '../../components/Form/FormLoginContainer';
import {
	Link,
} from "react-router-dom";

const Front = () => {
	const [inProp, setInProp] = useState(false);

	const swapForm = () => setInProp(!inProp);
	const handleTo = inProp ? '/login' : '/signup';

	return (
		<S.Container>
			<S.Wrapper>
				<S.Image src={require('../../assets/images/logo-web.png')} alt="logotype page" srcSet="" />
			</S.Wrapper>
			<S.FormBackground>
				{
					inProp &&
					<FormContainer linkTo={handleTo} onClick={swapForm}/>
				}
				{
					!inProp &&
					<FormLoginContainer linkTo={handleTo} onClick={swapForm}/>
				}
			</S.FormBackground>
			<Footer color="#6E0E0A" />
		</S.Container>
	);
}

export default Front;
