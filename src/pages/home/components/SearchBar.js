import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("ldkrsi");

  //   console.log(inputValue);
  //   console.log(validUser);

  const searchUserHandler = () => {
    fetch(`https://api.github.com/users/${inputValue}/repos`, {
      method: "GET",
    })
      .then((res) => {
        // setValidUser(true);
        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          props.getUsername(inputValue);
          navigate(`users/${inputValue}/repos`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
        navigate("/userNotFound");
      });
  };

  //   const onClickHandler = () => {
  //     props.getUsername(inputValue);
  //     navigate(`users/${inputValue}/repos`);
  //   };

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
