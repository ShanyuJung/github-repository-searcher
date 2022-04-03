import { useEffect, useState } from "react";
import axios from "axios";

const SearchUser = (name, perPage, curPage) => {
  const [isValid, setIsValid] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    if (name === undefined) return;
    let unmounted = false;

    if (!unmounted) {
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
    }

    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    if (name === undefined) return;
    let unmounted = false;

    if (!unmounted) {
      //If username is valid, GET repository information.
      axios({
        method: "GET",
        url: `https://api.github.com/users/${name}/repos`,
        params: { per_page: perPage, page: curPage },
      })
        .then((res) => {
          console.log("GET repo");
          // console.log(res.data);
          if (curPage === 1) {
            setUserRepos(res.data);
          } else {
            setUserRepos([...userRepos, ...res.data]);
          }
          setIsValid(true);
        })
        .catch((e) => {
          console.log(e);
          setIsValid(false);
        });
    }
    return () => {
      unmounted = true;
    };
  }, [name, curPage]);

  return { userInfo, isValid, userRepos };
};

export default SearchUser;
