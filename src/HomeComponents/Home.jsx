import "../Css/HomeStyles.css";
import SearchContainer from "./SearchContainer";
import { Outlet } from "react-router-dom";
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
