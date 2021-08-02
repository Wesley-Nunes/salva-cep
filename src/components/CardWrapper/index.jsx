// Components
import Button from "../Button";
import CardFull from "../CardFull";

// Context hook
import { useUser } from "../../context/user";

// Style
import "../../styles/global.css";

const CardWrapper = () => {
	const { getDb, removeCep } = useUser();

	return (
		<div className="grid mediumPadding">
			{getDb().map((result, id) => {
				return (
					<div
						key={id}
						className="cardWrapper textInCenter littlePadding"
					>
						<CardFull fields={result} />
						<Button
							btnname="Remover"
							onclick={() => {
								if (window.confirm("Remover CEP?")) {
									removeCep(result);
								}
							}}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default CardWrapper;
