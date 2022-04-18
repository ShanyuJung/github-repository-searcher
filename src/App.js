import "./App.css";
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users";
import Home from "./pages/Home/Home";
import Repo from "./pages/Repos/Repo";
import StyledHeader from "./Layout/Header";

function App() {
  //暫存選取的repo的資料
  const [selectedRepo, setSelectedRepo] = useState(undefined);
  const selectRepoHandler = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <>
      <HashRouter>
        <StyledHeader />

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
      </HashRouter>
    </>
  );
}

export default App;
