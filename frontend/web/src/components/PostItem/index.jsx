import React from 'react';

import * as S from './styles';
import { RiEditLine, RiDeleteBin7Line } from "react-icons/ri";

const PostItem = () => {
	return (
		<S.Container>
			<S.PostIcons>
				<S.DataSpan>
					March 23, 2020
			</S.DataSpan>
			<div>
					<RiEditLine size={32} color="#124E78"/>
					<RiDeleteBin7Line size={32} color="red" />
			</div>
			</S.PostIcons>
			<S.TitleHeader>
				Client-side Vs. Server-side Rendering: What to choose when?
					</S.TitleHeader>
			<S.UserNameSpan>
				Ragnar Lothbrok
					</S.UserNameSpan>
			<S.ContentParagraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tempor, mauris, mattis quam amet facilisi.
				</S.ContentParagraph>
		</S.Container>
	);
}

export default PostItem;
