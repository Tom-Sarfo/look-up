import AppEntry from "./AppEntry";
import Home from "./HomeComponents/Home";
import SearchInput from "./HomeComponents/SearchInput";
import StockList from "./HomeComponents/StockComponents/StockList";
import WelcomeText from "./HomeComponents/WelcomeText";
// import DrugDetailCard from "./ReusableComponents/DrugDetailCard";
// import SampleCode from "./ReusableComponents/DrugCard/SampleCode"
import OutletComponent from "./OutletComponent";


export const Routers = [
	{
		path: "/",
		element: <AppEntry />,
		children: [
			{
				path: "/",
				element: <Home />,
				children: [
					{
						path: "/",
						element: <WelcomeText />,
					},
					{
						path: "/drug_details/:id",
						element: <OutletComponent />,
					},
				],
			},
			{
				path: "/search",
				element: <SearchInput />,
			},
			{
				path: "/stock_position",
				element: <StockList />,
			},
		],
	},
];
