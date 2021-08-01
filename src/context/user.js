import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

const UserProvider = (props) => {
	const [userInfo, setUserInfo] = useState({});
	const [cepInfo, setCepInfo] = useState([{}]);
	const [newData, setNewData] = useState(false);

	const setName = (name) => {
		setUserInfo({
			name,
			cep: userInfo.cep,
			search: false,
		});
	};

	const getName = () => {
		return userInfo.name;
	};

	const setCep = (cep) => {
		setUserInfo({
			name: userInfo.name,
			cep,
			search: true,
		});
	};

	const getCep = () => {
		return userInfo.cep;
	};

	const setResult = (result) => {
		setCepInfo([...result]);
		setNewData(true);
	};

	const getResult = () => {
		return cepInfo;
	};

	const setSearchStatus = (status) => {
		setUserInfo({
			name: userInfo.name,
			cep: userInfo.cep,
			search: status,
		});
	};

	const getSearchStatus = () => {
		return userInfo.search;
	};

	const getDb = () => {
		const user = getName();
		const db = localStorage.getItem(user);
		return db ? JSON.parse(db).map((cep) => cep) : [{}];
	};

	const userContextValue = {
		setName,
		getName,
		setCep,
		getCep,
		setResult,
		getResult,
		setSearchStatus,
		getSearchStatus,
		getDb,
	};

	useEffect(() => {
		const user = getName();

		let dataInLocalStorage = getDb();
		let dataChoosed = getResult();

		// Make validations and send data to localStorage
		const hasValues = (obj) => Object.values(obj[0]).length > 1;
		if (hasValues(dataChoosed)) {
			let arr = Object.values(dataChoosed[0]);
			if (!arr.some((e) => typeof e === "undefined")) {
				let newLocalStorageData = [];

				if (!hasValues(dataInLocalStorage) && hasValues(dataChoosed)) {
					newLocalStorageData.push(...dataChoosed);
				}

				if (hasValues(dataInLocalStorage) && hasValues(dataChoosed)) {
					dataInLocalStorage.map((data) => {
						if (data["cep"] === dataChoosed[0]["cep"]) {
							dataChoosed = [{}];
						}
					});
					newLocalStorageData.push(...dataInLocalStorage);
					if (hasValues(dataChoosed)) {
						newLocalStorageData.push(...dataChoosed);
					}
				}
				localStorage.setItem(user, JSON.stringify(newLocalStorageData));
			}
		}
		setNewData(false);
	}, [newData]);

	return <UserContext.Provider value={userContextValue} {...props} />;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
