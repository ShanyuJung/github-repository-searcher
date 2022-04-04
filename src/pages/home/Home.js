import SearchBar from "./components/SearchBar";
import classes from "./Home.module.css";
import SearchUser from "../../API/SearchUser";

const Home = (props) => {
  const { isValid } = SearchUser();
  return (
    <>
      <div className={classes.header}>
        <i className="fa-brands fa-github fa-2xl"></i> Github Repository
        Searcher
      </div>
      <SearchBar />
    </>
  );
};

export default Home;
