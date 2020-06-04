import React from 'react';

import * as S from './styles';

const Button = ({ text, theme, disabled, loading }) => {
	return (
		<S.StyledButton block theme={theme} disabled={disabled} >
			{loading && <i className="fa fa-refresh fa-spin"></i>}
			<S.StyledSpan>{text}</S.StyledSpan>
		</S.StyledButton>
	);
}

export default Button;
