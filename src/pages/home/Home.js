import SearchBar from "./components/SearchBar";
import { useState } from "react";
import UserNotFound from "../Users/components/UserNotFound";
import classes from "./Home.module.css";

const Home = (props) => {
  const [isValid, setIsValid] = useState(true);

  const validUserHandler = (boolean) => {
    setIsValid(boolean);
  };

  return (
    <>
      <div className={classes.header}>
        <i className="fa-brands fa-github fa-2xl"></i> Github Repository Search
      </div>
      <SearchBar
        getUserInfo={props.getUserInfo}
        validUserHandler={validUserHandler}
      />
      {!isValid && <UserNotFound />}
    </>
  );
};

export default Home;
