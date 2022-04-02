import SearchBar from "./components/SearchBar";
import { useState } from "react";
import classes from "./Home.module.css";
import SearchUser from "../../API/SearchUser";

const Home = (props) => {
  const { isValid } = SearchUser();
  return (
    <>
      <div className={classes.header}>
        <i className="fa-brands fa-github fa-2xl"></i> Github Repository Search
      </div>
      <SearchBar />
      {isValid === false && <h1>OPPS! SOMETHING GO WRONG!</h1>}
    </>
  );
};

export default Home;
