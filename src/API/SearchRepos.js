import { useEffect, useState } from "react";
import axios from "axios";
import SearchUser from "./SearchUser";

const SearchRepos = (name) => {
  const [userRepos, setUserRepos] = useState([]);
  const { isValid, getErrorHandler } = SearchUser(name);

  useEffect(() => {
    if (!isValid) return;
    //If username is valid, GET repository information.
    axios({ method: "GET", url: `https://api.github.com/users/${name}/repos` })
      .then((res) => {
        console.log("GET repo");
        // console.log(res.data);
        setUserRepos(res.data);
      })
      .catch((e) => {
        console.log(e);
        getErrorHandler(false);
      });
  }, [name]);

  return { userRepos };
};

export default SearchRepos;
