import SearchBar from "./components/SearchBar";

import SearchUser from "../../API/SearchUser";

const Home = (props) => {
  const { isValid } = SearchUser();
  return (
    <>
      <SearchBar />
    </>
  );
};

export default Home;
