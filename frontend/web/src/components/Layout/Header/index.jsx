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
					<S.Icons>
					<RiArticleLine color="#D74E09" size={32} />
					<RiLogoutBoxLine size={32} />
					<S.UserSpan>User</S.UserSpan>
					</S.Icons>
				</S.Icons>
			</S.Wrapper>
		</S.HeadContainer>
	);
}

export default Header;
