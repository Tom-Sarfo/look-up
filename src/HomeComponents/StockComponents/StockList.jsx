import { useContext } from "react";
import { DrugData } from "../../DrugDataContext";
import DrugInfoCard from "../../ReusableComponents/DrugCard/DrugInfoCard";
import { styleClassName } from "../../ReusableComponents/DrugCard/CommonClassNames";
import { Stack } from "@mui/material";

export default function StockList() {
	const { drugs } = useContext(DrugData);
	const [drugData] = drugs;

	drugData.map((data) => {
		console.log(data);
	});

	return (
		<div className="StockList">
			<Stack spacing={1}>
				{drugData.map((data) => (
					<DrugInfoCard key={data.DrugId} drug={data} styleClassName={styleClassName}/>
				))}
			</Stack>
		</div>
	);
}
