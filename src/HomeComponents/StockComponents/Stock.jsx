import { useContext } from "react";
import { DrugData } from "../../DrugDataContext";

export default function Stock() {
	const { drugs, input } = useContext(DrugData);
	const [searchInput] = input;
	const [drugData] = drugs;

	console.log(drugData);
	return <div></div>;
}
