// Components
import CardWrapper from "../components/CardWrapper";
import Description from "../components/Description";
import Title from "../components/Title";

// Style
import "../styles/global.css";

const ShowTitleAndDescription = () => {
	const title = `Favoritos`;
	const message = `Esses são os seus CEPs salvos até o momento`;

	return (
		<header>
			<Title title={title} />
			<Description message={message} />
		</header>
	);
};

const Favorite = () => {
	return (
		<main className="contentCentralized">
			<ShowTitleAndDescription />
			<CardWrapper />
		</main>
	);
};

export default Favorite;
