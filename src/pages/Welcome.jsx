// Components
import Title from "../components/Title";
import Description from "../components/Description";
import TextFormAbstraction from "../components/TextFormAbstraction";

// Context hook
import { useAuth } from "../context/auth";
import { useUser } from "../context/user";

// Error validation
import * as Yup from "yup";

// Form manager
import { Formik, Form } from "formik";

// Style
import "../styles/global.css";

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
	const { login } = useAuth();
	const { setName } = useUser();

	return (
		<Formik
			initialValues={{
				name: "",
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.min(2, "O nome deve ter duas(2) letras ou mais")
					.max(16, "O nome deve ter dezesseis(16) letras ou menos")
					.required("O preenchimento desse campo é obrigatório"),
			})}
			onSubmit={(values) => {
				const { name } = values;

				login();
				setName(name);
			}}
		>
			<Form className="littleVerticalMargin">
				<TextFormAbstraction
					label="Nome: "
					name="name"
					type="text"
					placeholder="Digite seu nome aqui..."
					btnname="Iniciar"
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
