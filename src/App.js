import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  const getUserInfo = (data) => {
    setUserInfo(data);
  };
  // console.log(userInfo);

  useEffect(() => {
    if (userInfo.login === undefined) return;
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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home getUserInfo={getUserInfo} />} />
          <Route
            path={userInfo ? `/users/${userInfo.login}/repos` : "/user"}
            element={<Users username={userInfo.login} userRepos={userRepos} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
