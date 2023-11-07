import { Outlet } from "react-router-dom";
import supabase from "./DbConnection";
import { useState, useEffect } from "react";
import { DrugData } from "./DrugDataContext";

import NavBar from "./NavBar";
import Footer from "./Footer";
import "./App.css";

function AppEntry() {
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
		<>
			<DrugData.Provider
				value={{
					drugs: [drugData, setDrugData],
					input: [searchInput, setSearchInput],
				}}
			>
				<NavBar />
				<div className="OutletContainer">
					<Outlet />
				</div>

				<Footer />
			</DrugData.Provider>
		</>
	);
}

export default AppEntry;