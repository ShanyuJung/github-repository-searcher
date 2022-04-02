import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Users from "./pages/Users/Users";
import classes from "./App.module.css";
import Home from "./pages/Home/Home";
import Repo from "./pages/Repos/Repo";

function App() {
  // const [userInfo, setUserInfo] = useState({});
  // const [userRepos, setUserRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(undefined);
  // console.log(selectedRepo);

  // const getUserInfoHandler = (data) => {
  //   setUserInfo(data);
  // };

  const selectRepoHandler = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className={classes.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={`/users/:username/repos`}
            element={<Users selectRepoHandler={selectRepoHandler} />}
          />
          <Route
            path={`/users/:username/repos/:repoName`}
            element={<Repo repo={selectedRepo} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
