import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users";
import classes from "./App.module.css";
import Home from "./pages/Home/Home";
import Repo from "./pages/Repos/Repo";

function App() {
  // const [userInfo, setUserInfo] = useState({});
  // const [userRepos, setUserRepos] = useState([]);
  // const [selectedRepo, setSelectedRepo] = useState({});

  // const getUserInfoHandler = (data) => {
  //   setUserInfo(data);
  // };

  // const selectRepoHandler = (repo) => {
  //   setSelectedRepo(repo);
  // };

  return (
    <div className={classes.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/users/:username/repos`} element={<Users />} />
          <Route path={`/users/:username/repos/:repoName`} element={<Repo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
