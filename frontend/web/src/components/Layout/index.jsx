import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from '../Footer';

const styles = {
	containertyle: {
		margin: 0,
		padding: 0,
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
}

const Layout = ({ children }) => {
	return (
		<Container fluid style={styles.containertyle}>
					{children}
				<Footer/>
		</Container>
	);
}

export default Layout;
