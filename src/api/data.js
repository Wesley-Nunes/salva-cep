// Api request
import Request from "./request";

// Context hook
import { useUser } from "../context/user";

// To keep the app integrity make the api request only here,  if will need
// to change the api, this function have to export the data in same format
const Data = () => {
	const { getCep } = useUser();
	const actualCep = getCep();

	const { cep, logradouro, bairro, localidade, uf } = Request(actualCep);
	const formatedData = [
		{
			cep,
			logradouro,
			bairro,
			cidade: localidade,
			estado: uf,
		},
	];

	return formatedData;
};

export default Data;
