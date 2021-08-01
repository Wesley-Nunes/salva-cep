import data from "../api/data";

import Button from "../components/Button";
import CardFull from "../components/CardFull";

import { useUser } from "../context/user";

const Result = () => {
	const { setResult } = useUser();
	const values = data().map((e) => e);

	return (
		<>
			<h2>RESULTADOS DA PESQUISA</h2>
			<CardFull fields={values} />
			<Button btnname="Favoritar" onclick={() => setResult(values)} />
		</>
	);
};

export default Result;
