import DrugInfoCard from "./ReusableComponents/DrugCard/DrugInfoCard";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DrugData } from "./DrugDataContext";
import { styleClassName } from "./ReusableComponents/DrugCard/CommonClassNames";
export default function OutletComponent() {
	const drugId = useParams();
	const { drugs, input } = useContext(DrugData);
	const [drugData] = drugs;

	const filtered = drugData.filter((drug) => drug.DrugId === Number(drugId.id));
	const drug = filtered[0];

	return <DrugInfoCard drug={drug} styleClassName={styleClassName} />;
}
