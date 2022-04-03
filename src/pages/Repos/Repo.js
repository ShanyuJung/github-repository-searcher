import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./Repo.module.css";
import axios from "axios";

const Repo = (props) => {
  const { username, repoName } = useParams();
  const [mapRepo, setMapRepo] = useState(
    props.repo === undefined ? {} : props.repo
  );
  const [isError, setIsError] = useState({
    errorOccur: false,
    errorMessage: "",
  });

  useEffect(() => {
    if (props.repo === undefined) {
      axios({
        method: "GET",
        url: `https://api.github.com/users/${username}/repos`,
      })
        .then((res) => {
          console.log("GET repo by Repo.js");
          // console.log(res.data);
          const selectedRepo = res.data.filter(
            (repo) => repo.name === repoName
          );
          if (selectedRepo[0] === undefined) {
            console.log(selectedRepo[0]);
            setIsError({ errorOccur: true, errorMessage: "Repo Not Found" });
          } else {
            setMapRepo(selectedRepo[0]);
          }
        })
        .catch((e) => {
          console.log(e);
          setIsError({ errorOccur: true, errorMessage: "User Not Found" });
        });
    }
  }, [username, repoName]);
  // console.log(isError.errorOccur);

  return (
    <>
      {!isError.errorOccur && (
        <div className={classes.repo}>
          <h1>REPO</h1>
          <h2>{mapRepo["full_name"]}</h2>
          <h2>{mapRepo["description"]}</h2>
          <h2>{mapRepo["stargazers_count"]}</h2>
          <a href={mapRepo["html_url"]} target="_blank">
            github link
          </a>
          <Link to={`/users/${username}/repos`}>Back to Repos</Link>
        </div>
      )}
      {isError.errorMessage === "Repo Not Found" && <div>Repo Not Found</div>}
      {isError.errorMessage === "User Not Found" && <div>User Not Found</div>}
    </>
  );
};

export default Repo;
