import { Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import ItemDetails from "./ItemDetails";
import BasicMenu from "../../../ReusableComponents/DrugCard/Menu";

export default function DrugListCard({ drug }) {
	const [expandDrugDetail, setExpandDrugDetail] = useState(false);

	function handleDetailExpansion() {
		setExpandDrugDetail(!expandDrugDetail);
	}

	return (
		<div>
			<Paper className="drugItem">
				<table>
					<tbody>
						<tr>
							<td>ID:</td>
							<td colSpan={2} style={{ borderBottom: "2px solid #F1C232" }}>
								GHD{drug?.DrugId}
							</td>
							<td align="right">
								<BasicMenu />
							</td>
						</tr>
						<tr>
							<td>
								{expandDrugDetail === false ? (
									<ExpandMoreIcon onClick={handleDetailExpansion} />
								) : (
									<ExpandLessIcon onClick={handleDetailExpansion} />
								)}
							</td>
							<td colSpan={2} width={430}>
								<p className="drugName">{drug?.DrugName}</p>
							</td>
							<td>
								<b>¢{drug?.DrugPrice}</b>
							</td>
						</tr>
					</tbody>
				</table>
				<ItemDetails ExpandDetail={expandDrugDetail} drug={drug} />
			</Paper>
		</div>
	);
}
