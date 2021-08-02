// React
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

	const setDb = (db) => {
		const name = getName();
		const validDb = db.length === 0 ? [{}] : db;
		localStorage.setItem(name, JSON.stringify(validDb));
	};

	const getDb = () => {
		const name = getName();
		const db = localStorage.getItem(name);

		return db ? JSON.parse(db).map((cep) => cep) : [{}];
	};

	const removeCep = (cepInfo) => {
		const db = getDb().filter(
			(InternalCep) =>
				JSON.stringify(InternalCep) !== JSON.stringify(cepInfo)
		);
		const validDb = db.length === 0 ? [{}] : db;

		setDb(validDb);
		setNewData(true);
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
		setDb,
		getDb,
		removeCep,
	};

	useEffect(() => {
		let dataInLocalStorage = getDb();
		let cepSearched = getResult();

		// Make validations
		const hasValues = (obj) => Object.values(obj[0]).length > 1;
		// The conditional only will be start if exist values in search
		if (hasValues(cepSearched)) {
			let arr = Object.values(cepSearched[0]);
			// The database only will be change, if the user insert valid values
			if (!arr.some((e) => typeof e === "undefined")) {
				let newLocalStorageData = [];

				if (!hasValues(dataInLocalStorage) && hasValues(cepSearched)) {
					newLocalStorageData.push(...cepSearched);
				}

				if (hasValues(dataInLocalStorage) && hasValues(cepSearched)) {
					dataInLocalStorage.forEach((data) => {
						// If the cep searched exists in db don't add another copy
						if (data["cep"] === cepSearched[0]["cep"]) {
							cepSearched = [{}];
						}
					});

					newLocalStorageData.push(...dataInLocalStorage);

					if (hasValues(cepSearched)) {
						newLocalStorageData.push(...cepSearched);
					}
				}
				// Set the validated data to local storage
				setDb(newLocalStorageData);
			}
		}
		setNewData(false);
	}, [newData]);

	return <UserContext.Provider value={userContextValue} {...props} />;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
