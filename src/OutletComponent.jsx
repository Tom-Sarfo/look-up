import MainDrugCard from "./ReusableComponents/DrugCard/MainDrugCard";
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

  return <MainDrugCard drug={drug} styleClassName={styleClassName} />;
}
