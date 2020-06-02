import React from 'react';

import * as S from './styles';

const InputGroup = ({ name, title, inputText, type, value, handleChange, className, style, onBlur }) => {
	return (
		<S.Group >
			<S.Label htmlFor={name}>
				{title}
			</S.Label>
			<S.inputStyle
				className={className}
				onBlur={onBlur}
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
