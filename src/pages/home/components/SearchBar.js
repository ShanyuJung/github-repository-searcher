import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={searchUserHandler}>Search</button>
    </>
  );
};

export default SearchBar;
