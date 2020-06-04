import styled from 'styled-components';
import { Colors } from '../../styles/index';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${Colors.default.lightGray};
	min-height: 100vh;
	width: 100%;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;


	@media (min-width: 1440px) {
    flex-direction: row;
		justify-content: space-around;
  }
`;

export const ItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 2.5;
`;

export const PostListContainer = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
`;
