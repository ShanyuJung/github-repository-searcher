import { useEffect, useState } from "react";
import axios from "axios";

const SearchUser = (name, perPage, curPage) => {
  const [isValid, setIsValid] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    if (name === undefined) return;
    //Check username searched by user is valid and GET basic information.
    axios({ method: "GET", url: `https://api.github.com/users/${name}` })
      .then((res) => {
        console.log("GET user");
        // console.log(res.data);
        setUserInfo(res.data);
        setIsValid(true);
      })
      .catch((err) => {
        console.log(err);
        setIsValid(false);
      });
  }, []);

  useEffect(() => {
    if (name === undefined) return;
    //If username is valid, GET repository information.
    axios({
      method: "GET",
      url: `https://api.github.com/users/${name}/repos`,
      params: { per_page: perPage, page: curPage },
    })
      .then((res) => {
        console.log("GET repo");
        // console.log(res.data);
        setUserRepos([...userRepos, ...res.data]);
        setIsValid(true);
      })
      .catch((e) => {
        console.log(e);
        setIsValid(false);
      });
  }, [name, curPage]);

  return { userInfo, isValid, userRepos };
};

export default SearchUser;
