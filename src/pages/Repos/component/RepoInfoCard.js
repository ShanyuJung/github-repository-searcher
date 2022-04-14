import classes from "./RepoInfoCard.module.css";

const RepoInfoCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>{props.header}</div>
      <div className={classes.cardContent}>{props.children}</div>
    </div>
  );
};

export default RepoInfoCard;
