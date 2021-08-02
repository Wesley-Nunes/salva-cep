// React
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);

	const login = () => setLoggedIn(true);
	const logout = () => setLoggedIn(false);

	const authContextValue = {
		loggedIn,
		login,
		logout,
	};

	return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
