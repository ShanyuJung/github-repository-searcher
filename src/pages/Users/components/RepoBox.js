import classes from "./RepoBox.module.css";

const RepoBox = (props) => {
  const repo = props.repo;
  const UpdatedDate = new Date(repo.updated_at);

  return (
    <div className={classes.repoBox}>
      <div className={classes.repoNameBox}>
        <div
          className={classes.repoName}
          onClick={() => props.showRepoHandler(repo)}
        >
          {repo.name}
        </div>
        <div className={classes.repoStargazers}></div>
      </div>
      {
        //有description顯示description
        repo.description && (
          <div className={classes.description}>
            <p>{repo.description}</p>
          </div>
        )
      }
      <div className={classes.repoDetail}>
        {
          //有language顯示language
          repo.language && (
            <>
              <i className="fa-solid fa-code"></i>
              <p>{repo.language}</p>
            </>
          )
        }
        <i className="fa-solid fa-star"></i>
        <p>{repo.stargazers_count}</p>
        <i className="fa-solid fa-laptop-code"></i>
        <p>{`Updated on ${UpdatedDate.getFullYear()}-${
          UpdatedDate.getMonth() + 1
        }-${UpdatedDate.getDate()}`}</p>
      </div>
    </div>
  );
};

export default RepoBox;
