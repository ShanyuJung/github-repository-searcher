import styled from "styled-components";

const UserInfoBox = ({ className, userInfo }) => {
  return (
    <div className={className}>
      <div className="imgLandscape">
        <img src={userInfo.avatar_url} />
      </div>
      <div className="username">
        <a href={userInfo.html_url} target="_blank">
          {userInfo.name ? userInfo.name : userInfo.login}
        </a>
        <div className="userLogin">{userInfo.login}</div>
      </div>

      {
        // 有自介顯示自介
        userInfo.bio && (
          <div className="userInfoDetail">
            <i className="fa-solid fa-location-dot"></i>
            {userInfo.bio}
          </div>
        )
      }

      <div className="userInfoDetail">
        <i className="fa-solid fa-user-group"></i>
        {`${userInfo.followers} followers · ${userInfo.following} following`}
      </div>

      {
        // 有位置顯示位置
        userInfo.location && (
          <div className="userInfoDetail">
            <i className="fa-solid fa-location-dot"></i>
            {userInfo.location}
          </div>
        )
      }

      {
        // 有email顯示email
        userInfo.email && (
          <div className="userInfoDetail">
            <i className="fa-solid fa-envelope"></i>
            {userInfo.email}
          </div>
        )
      }
      {
        // 有blog顯示blog link
        userInfo.blog && (
          <div className="userInfoDetail">
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
          <div className="userInfoDetail">
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

const StyledUserInfoBox = styled(UserInfoBox)`
  font-weight: 600;
  color: #ddd;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  cursor: default;
  width: 600px;
  margin: 1rem auto;
  text-align: center;

  .imgLandscape {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
  }

  .imgLandscape img {
    width: auto;
    height: 100%;
  }

  .username {
    width: 100vw;
    margin: 0.5rem;
    font-size: 2.5rem;
  }

  .username a {
    text-decoration: none;
    color: #ddd;
  }

  .userLogin {
    font-size: 1.2rem;
    opacity: 0.6;
  }

  .username:hover a {
    color: #fff;
    text-decoration: underline;
  }

  .userInfoDetail {
    width: 100%;
    font-size: 1rem;
  }

  .userInfoDetail a {
    color: #ddd;
    text-decoration: none;
  }

  .userInfoDetail a:hover {
    color: #fff;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export default StyledUserInfoBox;
