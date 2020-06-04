import styled from 'styled-components';

export const Wrapper = styled.div`
	text-align: center;
	margin-top: 20px;

	@media (min-width: 1440px) {
  }
`;

export const Info = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	color: ${props => props.color || '#333333'};


`;
