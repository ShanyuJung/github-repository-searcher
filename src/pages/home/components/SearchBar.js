import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("ldkrsi");

  const searchUserHandler = () => {
    fetch(`https://api.github.com/users/${inputValue}`, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          props.validUserHandler(true);
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        props.getUserInfo(data);
        navigate(`users/${inputValue}/repos`);
        // console.log(data);
      })
      .catch((e) => {
        props.validUserHandler(false);
        console.log(e);
        // navigate("/userNotFound");
      });
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
