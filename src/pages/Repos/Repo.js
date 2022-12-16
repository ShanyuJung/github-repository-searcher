import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StyledRepoInfoCard from "./component/RepoInfoCard";
import StyledRepoNameHeader from "./component/RepoNameHeader";
import StyledRepoContainer from "./component/RepoContainer";
import StyledErrorMessage from "../Users/components/ErrorMessage";
import StyledRepoDetail from "./component/RepoDetail";
import StyledRepoLink from "./component/RepoLink";

const Repo = (props) => {
  const { username, repoName } = useParams();
  const [mapRepo, setMapRepo] = useState(
    props.repo === undefined ? {} : props.repo
  );
  const [isError, setIsError] = useState({
    errorOccur: false,
    errorMessage: "",
  });
  const [isLoading, setLoading] = useState(false);

  //如果app.js有向下傳selected repo資料,直接依據資料選染
  //如果app.js向下傳的selected repo資料為undefined則發送req請求全部repo資料,用.filter()留下指定資料
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      if (props.repo === undefined) {
        if (isLoading) return;
        setLoading(true);
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
            setIsError({ errorOccur: true, errorMessage: "User Not Found" });
          })
          .finally(() => {
            setLoading(false);
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
        <StyledRepoContainer>
          <StyledRepoNameHeader mapRepo={mapRepo} />
          <StyledRepoInfoCard header="About">
            <>
              <StyledRepoDetail>
                {mapRepo["description"] == undefined
                  ? "none"
                  : mapRepo["description"]}
              </StyledRepoDetail>
              <StyledRepoDetail>
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
              </StyledRepoDetail>
            </>
          </StyledRepoInfoCard>
          <StyledRepoInfoCard header="Language">
            <StyledRepoDetail>
              {mapRepo.language ? mapRepo.language : "-"}
            </StyledRepoDetail>
          </StyledRepoInfoCard>
          <StyledRepoLink path={`/users/${username}/repos`}>
            Back to Repos
          </StyledRepoLink>
        </StyledRepoContainer>
      )}
      {isError.errorMessage === "Repo Not Found" && (
        <StyledErrorMessage path={`/users/${username}/repos`}>
          oops! Repo not found! try another repo name!
        </StyledErrorMessage>
      )}
      {isError.errorMessage === "User Not Found" && (
        <StyledErrorMessage path={"/"}>
          oops! something went wrong! try another username!
        </StyledErrorMessage>
      )}
    </>
  );
};

export default Repo;
