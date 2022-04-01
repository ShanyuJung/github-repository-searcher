import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchUser = (name) => {
  const [isValid, setIsValid] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (name === undefined) return;
    //Check username searched by user is valid and GET basic information.
    axios({ method: "GET", url: `https://api.github.com/users/${name}` })
      .then((res) => {
        console.log("GET user");
        setUserInfo(res.data);
        setIsValid(true);
      })
      .catch((e) => {
        console.log(e);
        setIsValid(false);
        navigate("/");
        return;
      });

    //If username is valid, GET repository information.
    // axios({ method: "GET", url: `https://api.github.com/users/${name}/repos` })
    //   .then((res) => {
    //     console.log("GET repo");
    //     setUserRepos(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     setIsValid(false);
    //   });
  }, [name]);

  return { userInfo, userRepos, isValid };
};

export default SearchUser;
