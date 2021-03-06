import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* @import-normalize; bring in normalize.css styles */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
	html,
  body {
  height: 100%;
	min-height: 100%;
	margin: 0;
	padding: 0;
	max-width: 100%;
  font-family: 'Poppins', sans-serif;
	box-sizing: border-box;
  }
`;

export default GlobalStyle;
