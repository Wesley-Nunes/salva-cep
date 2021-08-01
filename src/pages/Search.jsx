// Form manager
import { Formik, Form } from "formik";

// Error validation
import * as Yup from "yup";

// Style
import "../styles/global.css";

// Components
import Title from "../components/Title";
import Description from "../components/Description";
import TextFormAbstraction from "../components/TextFormAbstraction";

import Result from "../pages/Result";

import { useUser } from "../context/user";

const ShowTitleAndDescription = () => {
	const title = `Pesquisa de CEP`;
	const message = `Digite o CEP, e clique em pesquisar!`;

	return (
		<header>
			<Title title={title} />
			<Description message={message} />
		</header>
	);
};

const SearchForm = () => {
	const { setCep } = useUser();

	return (
		<Formik
			initialValues={{
				cep: "",
			}}
			validationSchema={Yup.object({
				cep: Yup.string()
					.length(
						8,
						"CEP inválido. CEP válidos tem um total de 8 números"
					)
					.matches(
						/^[0-9]+$/,
						"Digite apenas números, sem traços, espaços ou outros caracteres"
					)
					.required("O preenchimento desse campo é obrigatório"),
			})}
			onSubmit={(values) => {
				const { cep } = values;
				setCep(cep);
			}}
		>
			<Form className="littleVerticalMargin">
				<TextFormAbstraction
					label="CEP: "
					name="cep"
					type="text"
					placeholder="Digite o CEP aqui..."
					btnname="Pesquisar"
				/>
			</Form>
		</Formik>
	);
};

const Search = () => {
	return (
		<main className="contentCentralized">
			<ShowTitleAndDescription />
			<SearchForm />
			<hr />
			<Result />
		</main>
	);
};

export default Search;
