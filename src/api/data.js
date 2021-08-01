import Request from "./request";

const data = () => {
	let cleanedData = [];

	const { cep, logradouro, bairro, localidade, uf } = Request();

	cleanedData.push({
		cep,
		logradouro,
		bairro,
		cidade: localidade,
		estado: uf,
	});

	return cleanedData;
};

export default data;
