import React, {forwardRef} from 'react';

import * as S from './styles';

const InputGroup = forwardRef(({
	name,
	title,
	inputText,
	type,
	value,
	handleChange,
	className,
	style,
	onBlur,
	defaultValue
}, ref) => {
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
				onChange={handleChange}
				ref={ref}
				defaultValue={defaultValue}
				/>
		</S.Group>
	);
})

export default InputGroup;
