// Context hook
import { useAuth } from "./context/auth";
import { useUser } from "./context/user";

// Pages
import Welcome from "./pages/Welcome";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Favorite from "./pages/Favorite";

// React
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

// Style
import "./styles/global.css";

export const UnauthenticatedRoutes = () => {
	return <Welcome />;
};

export const AuthenticatedRoutes = () => {
	const { loggedIn, logout } = useAuth();
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
							<h4 onClick={logout}>Sair</h4>
						</li>
					</ul>
				</nav>
				{loggedIn ? <Redirect to="/" /> : null}
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
