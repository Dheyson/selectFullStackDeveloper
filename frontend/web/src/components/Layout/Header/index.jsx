import React from 'react';

import * as S from './styles';
import Image from '../../../assets/images/logo-mobile.png';
import { RiLogoutBoxLine, RiArticleLine } from "react-icons/ri";

const Header = () => {
	return (
		<S.HeadContainer>
			<S.Wrapper>
				<S.ImageLogotype src={Image} width="200px"/>
				<S.Icons>
					<RiArticleLine color="#D74E09" size={24} />
					<RiLogoutBoxLine size={24} />
					<span>OkOk</span>
				</S.Icons>
			</S.Wrapper>
		</S.HeadContainer>
	);
}

export default Header;
