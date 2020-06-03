import React from 'react';

import * as S from './styles';
import {
	Link,
} from "react-router-dom";

const index = ({text, linkLabel, to, onClick, hidden}) => {

	return (
		<S.SpanStyled hidden={hidden}>
			{text}
			<Link onClick={onClick} to={to}>
				{linkLabel}
			</Link>
		</S.SpanStyled>
	);
}

export default index;
