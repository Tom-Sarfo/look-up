import "./HomeStyles.css";
import { useState, useEffect } from "react";
import { DrugData } from "../DrugDataContext";
import SearchContainer from "./SearchContainer";
import { Outlet } from "react-router-dom";
import supabase from "../DbConnection";

export default function Home() {
	const [searchInput, setSearchInput] = useState("");
	const [drugData, setDrugData] = useState([]);

	useEffect(() => {
		fetchDrugData();
	}, []);

	async function fetchDrugData() {
		const { data } = await supabase.from("Drugs").select();
		setDrugData(data);
	}

	return (
		<DrugData.Provider
			value={{
				drugs: [drugData, setDrugData],
				input: [searchInput, setSearchInput],
			}}
		>
			<div className="Homes">
				<SearchContainer
					searchInput={searchInput}
					setSearchInput={setSearchInput}
					drugData={drugData}
					setDrugData={setDrugData}
				/>
				<br />
				<br />
				<section>
					<Outlet />
				</section>
			</div>
		</DrugData.Provider>
	);
}
