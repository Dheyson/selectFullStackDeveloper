import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

export const StyledButton = styled.button`
	background: ${props => props.theme.main};
	border-radius: 6px;
	border: 0px solid ${props => props.theme.main};
	width: 100%;

	&:hover {
	background: #124c79;
	}
`;

StyledButton.defaultProps = {
	theme: {
		main: '#124E78',
	}
}

export const StyledSpan = styled.span`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #FFFFFF;
`;
