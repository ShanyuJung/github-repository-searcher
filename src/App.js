import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users";
import classes from "./App.module.css";
import Home from "./pages/Home/Home";
import Repo from "./pages/Repos/Repo";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState({});

  const getUserInfoHandler = (data) => {
    setUserInfo(data);
  };

  const selectRepoHandler = (repo) => {
    setSelectedRepo(repo);
  };

  useEffect(() => {
    if (userInfo.login === undefined) return;
    setUserRepos([]);
    fetch(`https://api.github.com/users/${userInfo.login}/repos`, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setUserRepos(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userInfo]);

  return (
    <div className={classes.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home getUserInfo={getUserInfoHandler} />} />
          <Route
            path={`/users/${userInfo.login}/repos`}
            element={
              <Users
                userInfo={userInfo}
                userRepos={userRepos}
                selectRepo={selectRepoHandler}
              />
            }
          />
          <Route
            path={`/users/${userInfo.login}/repos/${selectedRepo.name}`}
            element={<Repo repo={selectedRepo} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
