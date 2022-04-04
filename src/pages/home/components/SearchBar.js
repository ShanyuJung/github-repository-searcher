import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const searchUserHandler = () => {
    if (inputValue !== "" && inputValue !== undefined) {
      navigate(`/users/${inputValue}/repos`);
      return;
    }
    alert("Please Enter at least one character");
  };

  return (
    <div className={classes.searchBar}>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && searchUserHandler()}
        placeholder="Enter an username"
      />
      <button onClick={searchUserHandler}>
        <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
      </button>
    </div>
  );
};

export default SearchBar;
