import SearchBar from "./components/SearchBar";
import { useState } from "react";
import UserNotFound from "../Users/components/UserNotFound";

const Home = (props) => {
  const [isValid, setIsValid] = useState(true);

  const validUserHandler = (boolean) => {
    setIsValid(boolean);
  };

  return (
    <>
      <h1>HOME</h1>
      <SearchBar
        getUserInfo={props.getUserInfo}
        validUserHandler={validUserHandler}
      />
      {!isValid && <UserNotFound />}
    </>
  );
};

export default Home;
