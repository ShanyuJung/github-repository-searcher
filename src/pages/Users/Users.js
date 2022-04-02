import classes from "./User.module.css";
import { useNavigate, useParams } from "react-router-dom";
import SearchUser from "../../API/SearchUser";
import { useEffect, useState } from "react";

const Users = (props) => {
  const perPage = 10;
  const [curPage, setCurPage] = useState(1);
  const navigate = useNavigate();
  const { username } = useParams();
  const { userInfo, isValid, userRepos } = SearchUser(
    username,
    perPage,
    curPage
  );

  const showRepoHandler = (repo) => {
    props.selectRepoHandler(repo);
    navigate(`/users/${username}/repos/${repo.name}`);
  };

  const scrollHandler = (event) => {
    const scrollHeight = event.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      event.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 > scrollHeight) {
      setCurPage(curPage + 1);
      // console.log("AT BOTTOM");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      {isValid && (
        <>
          <div className={classes.header}>
            <img src={userInfo.avatar_url} />
            <div>{`USERS:${userInfo.login}`}</div>
          </div>
          {userRepos.map((repo) => {
            return (
              <div
                key={repo.id}
                className={classes.repoBox}
                onClick={() => showRepoHandler(repo)}
              >
                <h2>{repo.name}</h2>

                <h2>{repo.stargazers_count}</h2>
              </div>
            );
          })}
        </>
      )}
      {!isValid && <div>User Not Found</div>}
    </>
  );
};

export default Users;
