import { Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState} from "react";
import Details from "../Details";
import BasicMenu from "./Menu";

export default function SampleCode({ drug, styleClassName}) {
	const [expandDrugDetail, setExpandDrugDetail] = useState(false);

	function handleDetailExpansion() {
		setExpandDrugDetail(!expandDrugDetail);
	}

	return (
		<div>
			{drug.length > 0 && (
				<Paper className={styleClassName.DrugDetailCard}>
					<table>
						<tbody>
							<tr>
								<td>ID:</td>
                                {/* include this style in the external style sheet for this component*/}
								<td colSpan={2} style={{ borderBottom: "2px solid #F1C232" }}> 
									GHD{drug[0]?.DrugId}
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
                                    {/* remove the className for this and include the stlyes in main
                                        component styles sheet by using the p element selector
                                    */}
									<p>{drug[0]?.DrugName}</p>
								</td>
								<td>
									<b>¢{drug[0]?.DrugPrice}</b>
								</td>
							</tr>
						</tbody>
					</table>
					<Details ExpandDetail={expandDrugDetail} drug={drug} styleClassName={styleClassName}/>
				</Paper>
			)}
		</div>
	);
}
