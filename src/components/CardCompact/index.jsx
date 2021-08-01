import Title from "../components/Title";
import Description from "..components/Description";

import "../../styles/global.css";

const CardCompact = (props) => {
	const title = props.cep;
	const message = "Clique aqui para ter mais informações";

	return (
		<div className="borderWrapper cardWrapper mediumPadding textInCenter">
			<header>
				<Title title={title} />
				<Description message={message} />
			</header>
		</div>
	);
};

export default CardCompact;
