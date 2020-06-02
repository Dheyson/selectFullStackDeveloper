import React from 'react';

import * as S from './styles';

const InputGroup = ({name, title, inputText, type, value, handleChange, className, style}) => {
	return (
		<S.Group >
			<S.Label htmlFor={name}>
				{title}
			</S.Label>
			<S.inputStyle
			className={className}
			style={style}
			id={name}
			name={name}
			type={type}
			value={value}
			placeholder={inputText}
			onChange={handleChange} />
		</S.Group>
	);
}

export default InputGroup;
