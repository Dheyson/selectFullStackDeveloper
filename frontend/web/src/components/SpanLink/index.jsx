import React from 'react';

import * as S from './styles';

const index = ({text, link, href}) => {
	return (
		<S.SpanStyled>
			{text} <S.LinkStyled href={href} target="_blank">
				{link}
			</S.LinkStyled>
		</S.SpanStyled>
	);
}

export default index;
