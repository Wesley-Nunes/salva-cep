// Api data
import Data from "../api/data";

// Components
import Button from "../components/Button";
import CardFull from "../components/CardFull";

// Context hook
import { useUser } from "../context/user";

// Style
import "../styles/global.css";

const Result = () => {
	const { setResult } = useUser();
	const values = Data().map((e) => e);

	const handleClick = () => {
		// Send values to localStorage
		setResult(values);
		alert("Cep Salvo =)");
		// Clear the searched values
		setResult([{}]);
	};

	return (
		<main className="contentCentralized">
			<h2>RESULTADOS DA PESQUISA</h2>
			<CardFull fields={values[0]} />
			<Button btnname="Favoritar" onclick={handleClick} />
		</main>
	);
};

export default Result;
