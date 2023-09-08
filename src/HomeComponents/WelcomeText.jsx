import { useContext } from "react";
import { DrugData } from "../DrugDataContext";

export default function WelcomeText() {
	const { input } = useContext(DrugData);
	const [searchInput] = input;

	return (
		<div className="WelcomeText">
			{searchInput === "" && (
				<div>
					<h2>Get Quick Insight from your Stock Position!</h2>
				</div>
			)}
		</div>
	);
}
