import { useUser } from "../context/user";

import { useEffect, useState } from "react";
import axios from "axios";

const Request = () => {
	const [data, setData] = useState([]);
	const ROOT_URL = "https://viacep.com.br/ws";
	const { getCep } = useUser();
	const cep = getCep();

	useEffect(() => {
		axios
			.get(`${ROOT_URL}/${cep}/json/`)
			.then(({ data }) => setData(data))
			.catch(console.error);
	}, [cep]);

	return data;
};

export default Request;
