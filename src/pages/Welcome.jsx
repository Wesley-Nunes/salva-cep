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
	const title = `Olá, bem vindo(a) ao Salva CEP!`;
	const message = `Digite seu nome, e clique em iniciar!`;

	return (
		<header>
			<Title title={title} />
			<Description message={message} />
		</header>
	);
};

const Login = () => {
	return (
		<Formik
			initialValues={{
				name: "",
				isAuthenticated: false,
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.min(2, "O nome deve ter duas(2) letras ou mais")
					.max(16, "O nome deve ter dezesseis(16) letras ou menos")
					.required("O preenchimento desse campo é obrigatório"),
			})}
			onSubmit={(values) => {
				const { name, isAuthenticated } = values;

				if (localStorage.getItem(name)) {
					const dataInLocalStorage = JSON.parse(
						localStorage.getItem(name)
					);
					localStorage.setItem(
						name,
						JSON.stringify({
							...dataInLocalStorage,
							isAuthenticated: true,
						})
					);
				} else {
					localStorage.setItem(
						name,
						JSON.stringify({ isAuthenticated: true })
					);
				}
			}}
		>
			<Form className="littleVerticalMargin">
				<TextFormAbstraction
					label="Nome: "
					name="name"
					type="text"
					placeholder="Digite seu nome aqui..."
					btn="Iniciar"
				/>
			</Form>
		</Formik>
	);
};

const Welcome = () => {
	return (
		<main className="contentCentralized">
			<ShowTitleAndDescription />
			<Login />
		</main>
	);
};

export default Welcome;
