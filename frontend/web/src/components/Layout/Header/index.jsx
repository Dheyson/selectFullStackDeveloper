import React from 'react';
import Media from 'react-media';

import * as S from './styles';
import Image from '../../../assets/images/logo-mobile.png';
import { RiLogoutBoxLine, RiArticleLine } from "react-icons/ri";
import Button from '../../Button';

const theme = {
	main: "#D74E09"
};

const Header = () => {
	return (
		<S.HeadContainer>
			<S.Wrapper>
				<S.ImageLogotype src={Image} width="200px"/>
				<S.Icons>
					<S.Icons>
						<Media query="(min-width: 1440px)" render={() =>
							(
								<Button text="Write a post" theme={theme} />
							)}
						/>
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
