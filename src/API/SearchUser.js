import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useSearchUser = (name, perPage, curPage) => {
  const [isValid, setIsValid] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  const reqUserInfoHandler = useCallback(async () => {
    try {
      if (name === undefined) return;
      await axios({
        method: "GET",
        url: `https://api.github.com/users/${name}`,
      }).then((res) => {
        // console.log("GET user");
        // console.log(res.data);
        setUserInfo(res.data);
        setTotalPage(
          Math.floor(parseInt(res.data["public_repos"]) / perPage) + 1
        );
        setIsValid(true);
      });
    } catch (err) {
      //Check username searched by user is valid and GET basic information.
      // console.log(err);
      setIsValid(false);
    }
  }, [name]);

  useEffect(() => {
    reqUserInfoHandler();
  }, [name]);

  const setLoadingHandler = async () => {
    setLoading(true);
  };

  const reqUserReposHandler = useCallback(async () => {
    try {
      if (name === undefined) return;
      // console.log("axios send req");
      //GET repository information.Request 10 repos for each request.
      await setLoadingHandler();
      await axios({
        method: "GET",
        url: `https://api.github.com/users/${name}/repos`,
        params: { per_page: perPage, page: curPage },
      }).then((res) => {
        // console.log(`GET repo${curPage}`);
        // console.log(res.data);
        if (curPage === 1) {
          setUserRepos(res.data);
        } else {
          setUserRepos([...userRepos, ...res.data]);
        }
        setIsValid(true);
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
      setIsValid(false);
    }
  }, [name, curPage]);

  useEffect(() => {
    reqUserReposHandler();
  }, [name, curPage]);

  return { userInfo, isValid, userRepos, totalPage, loading };
};

export default useSearchUser;
