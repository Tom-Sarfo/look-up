import { useContext } from "react";
import { DrugData } from "../../DrugDataContext";
import StockDetailCard from "./StockDrugCard/StockDetailCard";
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
					<StockDetailCard key={data.DrugId} drug={data} />
				))}
			</Stack>
		</div>
	);
}
