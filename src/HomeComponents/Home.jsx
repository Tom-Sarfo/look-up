import "./HomeStyles.css";
// import { useState, useEffect } from "react";
// import { DrugData } from "../DrugDataContext";
import SearchContainer from "./SearchContainer";
import { Outlet } from "react-router-dom";
// import supabase from "../DbConnection";

export default function Home() {
	return (
		<div className="Homes">
			<SearchContainer />
			<br />
			<br />
			<section>
				<Outlet />
			</section>
		</div>
	);
}
