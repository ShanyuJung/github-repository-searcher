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

      {
        // 有自介顯示自介
        userInfo.bio && (
          <div className={classes.userInfoDetail}>
            <i className="fa-solid fa-location-dot"></i>
            {userInfo.bio}
          </div>
        )
      }

      <div className={classes.userInfoDetail}>
        <i className="fa-solid fa-user-group"></i>
        {`${userInfo.followers} followers · ${userInfo.following} following`}
      </div>

      {
        // 有位置顯示位置
        userInfo.location && (
          <div className={classes.userInfoDetail}>
            <i className="fa-solid fa-location-dot"></i>
            {userInfo.location}
          </div>
        )
      }

      {
        // 有email顯示email
        userInfo.email && (
          <div className={classes.userInfoDetail}>
            <i className="fa-solid fa-envelope"></i>
            {userInfo.email}
          </div>
        )
      }
      {
        // 有blog顯示blog link
        userInfo.blog && (
          <div className={classes.userInfoDetail}>
            <i className="fa-solid fa-link"></i>
            <a href={userInfo.blog} target="_blank">
              {userInfo.blog}
            </a>
          </div>
        )
      }
      {
        // 有twitter_username顯示twitter link
        userInfo.twitter_username && (
          <div className={classes.userInfoDetail}>
            <i className="fa-brands fa-twitter"></i>
            <a
              href={`https://twitter.com/${userInfo.twitter_username}`}
              target="_blank"
            >
              {`@${userInfo.twitter_username}`}
            </a>
          </div>
        )
      }
    </div>
  );
};

export default UserInfoBox;
