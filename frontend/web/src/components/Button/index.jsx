import React from 'react';

import * as S from './styles';

const Button = ({ text, theme }) => {
	return (
		<S.StyledButton block theme={theme}>
			<S.StyledSpan>{text}</S.StyledSpan>
		</S.StyledButton>
	);
}

export default Button;
