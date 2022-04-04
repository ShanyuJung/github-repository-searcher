import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users";
import classes from "./App.module.css";
import Home from "./pages/Home/Home";
import Repo from "./pages/Repos/Repo";

function App() {
  //暫存選取的repo的資料
  const [selectedRepo, setSelectedRepo] = useState(undefined);
  const selectRepoHandler = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className={classes.wrapper}>
      <BrowserRouter>
        <Link to={`/github-repository-searcher`} className={classes.navbar}>
          <div>
            <i className="fa-brands fa-github fa-2xl"></i> Github Repository
            Searcher
          </div>
        </Link>

        <Routes>
          <Route path="/github-repository-searcher" element={<Home />} />
          <Route
            path={`/github-repository-searcher/users/:username/repos`}
            element={<Users selectRepoHandler={selectRepoHandler} />}
          />
          <Route
            path={`/github-repository-searcher/users/:username/repos/:repoName`}
            element={<Repo repo={selectedRepo} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
