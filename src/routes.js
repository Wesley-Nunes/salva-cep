// React
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Favorite from "./pages/Favorite";

import { useAuth } from "./context/auth";
import { useUser } from "./context/user";

// Style
import "./styles/global.css";

export const UnauthenticatedRoutes = () => {
	return <Welcome />;
};

export const AuthenticatedRoutes = () => {
	const { logout } = useAuth();
	const { getName, getSearchStatus } = useUser();
	const name = getName();
	const status = getSearchStatus();

	return (
		<Router>
			<>
				<nav className="navWrapper">
					<ul>
						<li>
							<Link to="/">Pesquisar</Link>
						</li>
						<li>
							<Link to="/favorite">Favoritos</Link>
						</li>
						<li>
							<h3>{name}</h3>
						</li>

						<li>
							<Link onClick={logout}>Sair</Link>
						</li>
					</ul>
				</nav>
				{status ? <Redirect to="/result" /> : null}
			</>

			<Switch>
				<Route exact path="/">
					<Search />
				</Route>
				<Route path="/favorite">
					<Favorite />
				</Route>
				<Route path="/result">
					<Result />
				</Route>
			</Switch>
		</Router>
	);
};
