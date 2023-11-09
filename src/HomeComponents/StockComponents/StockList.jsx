import { useContext } from "react";
import { DrugData } from "../../DrugDataContext";
import MainDrugCard from "../../ReusableComponents/DrugCard/MainDrugCard";
import { styleClassName } from "../../ReusableComponents/DrugCard/CommonClassNames";
import { Stack } from "@mui/material";

export default function StockList() {
  const { drugs } = useContext(DrugData);
  const [drugData] = drugs;

  return (
    <div className="StockList">
      <Stack spacing={1}>
        {drugData.map((data) => (
          <MainDrugCard
            key={data.DrugId}
            drug={data}
            styleClassName={styleClassName}
          />
        ))}
      </Stack>
    </div>
  );
}
