import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from '../Footer';

const styles = {
	containertyle: {
		margin: 0,
		padding: 0,
		minHeight: '100vh',
	}
}

const Layout = ({ children }) => {
	return (
		<Container fluid style={styles.containertyle}>
			<Row>
				<Col>
					{children}
				</Col>
			</Row>
			<Footer />
		</Container>
	);
}

export default Layout;
