import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users";
import "./App.css";
import Home from "./pages/home/Home";
import SearchBar from "./pages/home/components/SearchBar";
import UserNotFound from "./pages/Users/UserNotFound";

function App() {
  const [username, setUsername] = useState(undefined);

  const getUsername = (name) => {
    setUsername(name);
  };
  console.log(username);

  // useEffect(() => {
  //   if (username === undefined) return;
  //   fetch(`https://api.github.com/users/${username}/repos`, {
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, [username]);

  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar getUsername={getUsername} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/users/${username}/repos`} element={<Users />} />
          <Route path="/userNotFound" element={<UserNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
