import { Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState} from "react";
import Detail from "./Detail";
import BasicMenu from "./Menu";

export default function DrugInfoCard({ drug, styleClassName}){
	const [expandDrugDetail, setExpandDrugDetail] = useState(false);

	function handleDetailExpansion() {
		setExpandDrugDetail(!expandDrugDetail);
	}

	return (
		<div>
			{drug ?(
				<Paper className={styleClassName.DrugDetailCard}>
					<table>
						<tbody>
							<tr>
								<td>ID:</td>
                                {/* include this style in the external style sheet for this component*/}
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
									<p>{drug?.DrugName}</p>
								</td>
								<td>
									<b>¢{drug?.DrugPrice}</b>
								</td>
							</tr>
						</tbody>
					</table>
					<Detail ExpandDetail={expandDrugDetail} drug={drug} styleClassName={styleClassName}/>
				</Paper>
			): null}
		</div>
	);
}
