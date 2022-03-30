import classes from "./Repo.module.css";

const Repo = (props) => {
  return (
    <div className={classes.repo}>
      <h1>REPO</h1>
      <h2>{props.repo["full_name"]}</h2>
      <h2>{props.repo["description"]}</h2>
      <h2>{props.repo["stargazers_count"]}</h2>
      <a href={props.repo["html_url"]} target="_blank">
        github link
      </a>
    </div>
  );
};

export default Repo;
