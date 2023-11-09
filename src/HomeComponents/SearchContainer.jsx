import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";
import SearchSuggestion from "./SearchSuggestion";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DrugData } from "../DrugDataContext";

export default function SearchContainer() {
  const [toggleSuggestedList, setToggleSuggestedList] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const { drugs, input } = useContext(DrugData);
  const [drugData] = drugs;
  const [searchInput, setSearchInput] = input;

  const handleChange = (inputValue) => {
    setSearchInput(inputValue);
    setToggleSuggestedList(false);
    fetchFilteredDrugData(inputValue);
  };

  function fetchFilteredDrugData(inputValue) {
    let searchFilter = drugData?.filter((match) => {
      const searchValue = inputValue?.toLowerCase();
      return match.DrugName.toLowerCase().includes(searchValue);
    });
    setFilteredData(searchFilter);
  }

  function handleHide() {
    setToggleSuggestedList(!toggleSuggestedList);
  }

  return (
    <div className="SearchContainer">
      <section className="SearchWrapper">
        <div className="Search">
          <div className="SearchIcon">
            <SearchIcon
              sx={{
                color: "#FF9900",
              }}
            />
          </div>
          <SearchInput searchInput={searchInput} setInput={handleChange} />
        </div>
        {searchInput !== "" && toggleSuggestedList === false && (
          <ul className="SearchSuggestedList" onClick={handleHide}>
            {filteredData.map((drug) => {
              return (
                <li key={drug.DrugId}>
                  <Link to={`/drug_details/${drug.DrugId}`}>
                    <SearchSuggestion drug={drug} />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
