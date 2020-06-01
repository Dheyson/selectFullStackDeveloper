import styled from 'styled-components';

export const Container = styled.div`
	background-color: #ffffff;
	border: 2px solid #363636;
	border-radius: 5px;
	padding: 20px;
	margin-bottom: 10px;
`;

export const PostIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const DataSpan = styled.span`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: 0.05em;
	color: #000000;
`;

export const TitleHeader = styled.h1`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.05em;
	color: #D74E09;
`;

export const UserNameSpan = styled.span`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: 0.05em;
	color: #000000;
`;

export const ContentParagraph = styled.p`
	overflow: hidden;
  text-overflow: ellipsis;
	display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: 0.05em;
	color: #000000;
	padding-top: 20px;
`;
