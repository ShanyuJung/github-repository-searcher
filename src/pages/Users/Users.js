import classes from "./User.module.css";
import { useNavigate, useParams } from "react-router-dom";
import SearchUser from "../../API/SearchUser";

const Users = (props) => {
  const navigate = useNavigate();
  const { username } = useParams();
  const { userInfo, userRepos, isValid } = SearchUser(username);

  const showRepoHandler = (repo) => {
    // console.log(repo);
    // props.selectRepo(repo);
    navigate(`/users/${username}/repos/${repo.name}`);
  };

  return (
    <>
      <div className={classes.header}>
        <img src={userInfo.avatar_url} />
        <div>{`USERS:${userInfo.login}`}</div>
        <div>
          <p>{username}</p>
        </div>
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
  );
};

export default Users;
