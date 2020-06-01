import React from 'react';

import * as S from './styles';

import Header from '../../components/Layout/Header';
import Footer from '../../components/Footer';
import PostItem from '../../components/PostItem';
import PostList from '../../components/PostItem/PostList';

const Home = () => {
	return (
		<S.Container>
			<Header />
			<S.Main>
				<S.ItemsContainer>
					<PostItem />
					<PostItem />
				</S.ItemsContainer>
				<S.PostListContainer>
					<PostList />
				</S.PostListContainer>
			</S.Main>
			<Footer />
		</S.Container>
	);
}

export default Home;
