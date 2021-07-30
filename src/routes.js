// React
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

// Style
import "./styles/global.css";

export const UnauthenticatedRoutes = () => {
	return <Welcome />;
};

export const AuthenticatedRoutes = () => {
	return (
		<Router>
			<nav className="navWrapper">
				<ul>
					<li>
						<Link to="/">Pesquisar</Link>
					</li>
					<li>
						<Link to="/favorite">Favoritos</Link>
					</li>
					<li>
						{/*setName Here*/}
						<h3>Jack</h3>
					</li>

					<li>
						{/*HandleLogout Here*/}
						<Link to="/welcome">Sair</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route exact path="/">
					<Search />
				</Route>
				<Route path="/favorite">
					<Favorite />
				</Route>
				<Route path="/welcome">
					<Welcome />
				</Route>
			</Switch>
		</Router>
	);
};
