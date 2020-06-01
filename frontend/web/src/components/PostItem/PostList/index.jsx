import React from 'react';

import * as S from './styles';

const PostList = () => {
	return (
		<S.Container>
			<S.Title>
				Last added
			</S.Title>
			<S.DataSpan>
				March 23, 2020
					</S.DataSpan>
			<S.TitleHeader>
				Client-side Vs. Server-side Rendering: What to choose when?
					</S.TitleHeader>
			<S.UserNameSpan>
				Ragnar Lothbrok
					</S.UserNameSpan>
		</S.Container>
	);
}

export default PostList;
