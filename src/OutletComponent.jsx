import SampleCode from "./ReusableComponents/DrugCard/SampleCode";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DrugData } from "./DrugDataContext";
import { styleClassName } from "./ReusableComponents/CommonClassNames";
export default function OutletComponent() {
	const drugId = useParams();
	const { drugs, input } = useContext(DrugData);
	// const [searchInput] = input;
	const [drugData] = drugs;

	const drug = drugData.filter((drug) => drug.DrugId === Number(drugId.id));

	return <SampleCode drug={drug} styleClassName={styleClassName} />;
}
