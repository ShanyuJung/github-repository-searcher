import classes from "./UserInfoBox.module.css";

const UserInfoBox = (props) => {
  const userInfo = props.userInfo;
  return (
    <div className={classes.header}>
      <div className={classes.imgLandscape}>
        <img src={userInfo.avatar_url} />
      </div>
      <div className={classes.username}>
        <a href={userInfo.html_url} target="_blank">
          {userInfo.login}
        </a>
      </div>

      <div className={classes.userInfoDetail}>
        <i className="fa-solid fa-user-group"></i>
        {`${userInfo.followers} · ${userInfo.following}`}
      </div>

      {userInfo.location && (
        <div className={classes.userInfoDetail}>
          <i className="fa-solid fa-location-dot"></i>
          {userInfo.location}
        </div>
      )}
      {userInfo.blog && (
        <div className={classes.userInfoDetail}>
          <i className="fa-solid fa-link"></i>
          <a href={userInfo.blog} target="_blank">
            {userInfo.blog}
          </a>
        </div>
      )}
    </div>
  );
};

export default UserInfoBox;
