import { Chip } from "@mui/material";
import "./DrugDetailCard.css";
import BoltIcon from "@mui/icons-material/Bolt";
styleClassName = {
    Details: "DrugDetailTable",
    Chip: "chip",
}
export default function DrugDetails({ ExpandDetail, drug, styleClassName }) {
	return (
		<div>
			{ExpandDetail === true && (
				<table width={450} className={styleClassName.Details}>
					<tbody>
						<tr>
							<td>
								<b>Drug details</b>
							</td>
							<td>
								<Chip
									icon={<BoltIcon />}
									label="Movable"
									variant="contained"
									size="small"
									sx={{
										background: "#FF5100",
										color: "white",
									}}
									className={styleClassName.chip}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<b>Availability</b>
							</td>
							<td align="center">
								<b className="RightAlignSmallScreen">
									{drug[0]?.Availability}pks
								</b>
							</td>
						</tr>
						<tr>
							<td>
								<b>Old Price</b>
							</td>
							<td align="center">
								<b className="RightAlignSmallScreen">¢26.00</b>
							</td>
						</tr>
						<tr>
							<td>
								{drug[0]?.Alternative !== null ? (
									<b>{drug[0]?.Alternative} (Alternative)</b>
								) : (
									<b>No Alternative Available</b>
								)}
							</td>
							<td align="center">
								<b className="RightAlignSmallScreen">¢0.00</b>
							</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
}
