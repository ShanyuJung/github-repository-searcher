import classes from "./User.module.css";
import { useNavigate } from "react-router-dom";

const Users = (props) => {
  const navigate = useNavigate();

  const showRepoHandler = (repo) => {
    // console.log(repo);
    props.selectRepo(repo);
    navigate(`/users/${props.userInfo.login}/repos/${repo.name}`);
  };

  return (
    <>
      <div className={classes.header}>
        <img src={props.userInfo.avatar_url} />
        <div>{`USERS:${props.userInfo.login}`}</div>
      </div>

      {props.userRepos.map((repo) => {
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
  );
};

export default Users;
