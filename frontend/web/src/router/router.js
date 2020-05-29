import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import LeadPage from "../pages/Lead";
import HomePage from "../pages/Home";
import FrontPage from '../pages/Front';

export default function App() {
	return (
			<Switch>
				<Route path="/">
					<LeadPage />
				</Route>
				<Route path="/front">
					<FrontPage />
				</Route>
				<Route path="/a">
					<HomePage />
				</Route>
			</Switch>
	);
}
