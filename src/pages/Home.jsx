// Form manager
import { Formik, Form } from "formik";

// Error validation
import * as Yup from "yup";

// Style
import "./style.css";

// Components
import Title from "../components/Title";
import Description from "../components/Description";
import TextFormAbstraction from "../components/TextFormAbstraction";

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

const Search = () => {
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
				console.log(values);
			}}
		>
			<Form className="littleVerticalMargin">
				<TextFormAbstraction
					label="CEP: "
					name="cep"
					type="text"
					placeholder="Digite o CEP aqui..."
					btn="Pesquisar"
				/>
			</Form>
		</Formik>
	);
};

const Home = () => {
	return (
		<main className="contentCentralized">
			<ShowTitleAndDescription />
			<Search />
		</main>
	);
};

export default Home;
