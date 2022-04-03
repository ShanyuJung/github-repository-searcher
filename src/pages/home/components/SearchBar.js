import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("ldkrsi");

  const searchUserHandler = () => {
    navigate(`users/${inputValue}/repos`);
  };

  return (
    <div className={classes.searchBar}>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && searchUserHandler()}
      />
      <button onClick={searchUserHandler}>
        <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
      </button>
    </div>
  );
};

export default SearchBar;
