// React
import { useEffect, useState } from "react";

// Promise-based HTTP Client
import axios from "axios";

const Request = (cep) => {
	const [data, setData] = useState([]);
	const ROOT_URL = "https://viacep.com.br/ws";
	const actualCep = cep;

	useEffect(() => {
		axios
			.get(`${ROOT_URL}/${actualCep}/json/`)
			.then(({ data }) => setData(data))
			.catch(console.error);
	}, [actualCep]);

	return data;
};

export default Request;
