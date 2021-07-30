import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

const UserProvider = (props) => {
	const [userInfo, setUserInfo] = useState({});

	const setName = (name) => {
		setUserInfo({
			name,
		});
	};

	const getName = () => {
		return userInfo.name;
	};

	const userContextValue = {
		setName,
		getName,
	};

	return <UserContext.Provider value={userContextValue} {...props} />;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
