/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import Routes from './router/router';
import Layout from './components/Layout';
import GlobalStyles from './index';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyles/>
			<Routes />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
