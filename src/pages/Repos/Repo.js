import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./Repo.module.css";
import axios from "axios";
import RepoInfoCard from "./component/RepoInfoCard";

const Repo = (props) => {
  const { username, repoName } = useParams();
  const [mapRepo, setMapRepo] = useState(
    props.repo === undefined ? {} : props.repo
  );
  const [isError, setIsError] = useState({
    errorOccur: false,
    errorMessage: "",
  });

  //如果app.js有向下傳selected repo資料,直接依據資料選染
  //如果app.js向下傳的selected repo資料為undefined則發送req請求全部repo資料,用.filter()留下指定資料
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      if (props.repo === undefined) {
        axios({
          method: "GET",
          url: `https://api.github.com/users/${username}/repos`,
        })
          .then((res) => {
            // console.log("GET repo by Repo.js");
            // console.log(res.data);
            const selectedRepo = res.data.filter(
              (repo) => repo.name === repoName
            );
            if (selectedRepo[0] === undefined) {
              // console.log(selectedRepo[0]);
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
    }

    return () => {
      unmounted = true;
    };
  }, [username, repoName]);

  return (
    <>
      {!isError.errorOccur && (
        <div className={classes.repo}>
          <div className={classes.repoName}>
            <a href={mapRepo["html_url"]} target="_blank">
              {mapRepo["full_name"]}
            </a>
          </div>
          <RepoInfoCard header="About">
            <>
              <div className={classes.content}>
                {mapRepo["description"] == undefined
                  ? "none"
                  : mapRepo["description"]}
              </div>
              <div className={classes.content}>
                {mapRepo["license"] && (
                  <div>
                    <i className="fa-solid fa-scale-balanced"></i>
                    {mapRepo["license"]["name"]}
                  </div>
                )}
                <div>
                  <i className="fa-solid fa-star"></i>
                  {`${mapRepo["stargazers_count"]} stars`}
                </div>
                <div>
                  <i className="fa-solid fa-code-fork"></i>
                  {`${mapRepo["forks_count"]} forks`}
                </div>
              </div>
            </>
          </RepoInfoCard>
          <RepoInfoCard header="Language">
            <div className={classes.content}>{mapRepo.language}</div>
          </RepoInfoCard>

          <Link to={`/users/${username}/repos`} className={classes.backToRepos}>
            Back to Repos
          </Link>
        </div>
      )}
      {isError.errorMessage === "Repo Not Found" && (
        <Link to={`/users/${username}/repos`} className={classes.errorMessage}>
          oops! Repo not found! try another repo name!
        </Link>
      )}
      {isError.errorMessage === "User Not Found" && (
        <Link to={`/`} className={classes.errorMessage}>
          oops! something went wrong! try another username!
        </Link>
      )}
    </>
  );
};

export default Repo;
