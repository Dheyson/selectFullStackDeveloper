import React from 'react';

import * as S from './styles';

const Button = ({ text, theme, disabled }) => {
	return (
		<S.StyledButton block theme={theme} disabled={disabled}>
			<S.StyledSpan>{text}</S.StyledSpan>
		</S.StyledButton>
	);
}

export default Button;
