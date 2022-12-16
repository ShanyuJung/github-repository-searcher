import { useEffect, useState } from "react";
import axios from "axios";

const useSearchUser = (name, perPage, curPage) => {
  const [isValid, setIsValid] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  const reqUserInfoHandler = async () => {
    try {
      if (name === undefined) return;

      await axios({
        method: "GET",
        url: `https://api.github.com/users/${name}`,
      }).then((res) => {
        setUserInfo(res.data);
        setTotalPage(
          Math.floor(parseInt(res.data["public_repos"]) / perPage) + 1
        );
        setIsValid(true);
      });
    } catch (err) {
      //Check username searched by user is valid and GET basic information.
      setIsValid(false);
    }
  };

  useEffect(() => {
    reqUserInfoHandler();
  }, [name]);

  const reqUserReposHandler = async () => {
    try {
      if (name === undefined || isLoading) return;
      // console.log("axios send req");
      //GET repository information.Request 10 repos for each request.
      setIsLoading(true);
      await axios({
        method: "GET",
        url: `https://api.github.com/users/${name}/repos`,
        params: { per_page: perPage, page: curPage },
      })
        .then((res) => {
          // console.log(`GET repo${curPage}`);
          // console.log(res.data);
          if (curPage === 1) {
            setUserRepos(res.data);
          } else {
            setUserRepos([...userRepos, ...res.data]);
          }
          setIsValid(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      setIsValid(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    reqUserReposHandler();
  }, [name, curPage]);

  return { userInfo, isValid, userRepos, totalPage, isLoading };
};

export default useSearchUser;
