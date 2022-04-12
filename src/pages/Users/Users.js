import classes from "./User.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import SearchUser from "../../API/SearchUser";
import { useEffect, useState } from "react";
import UserInfoBox from "./components/UserInfoBox";
import RepoBox from "./components/RepoBox";

const Users = (props) => {
  const perPage = 10;
  const [curPage, setCurPage] = useState(1);
  const navigate = useNavigate();
  const { username } = useParams();
  const { userInfo, isValid, userRepos, totalPage } = SearchUser(
    username,
    perPage,
    curPage
  );

  //導向選定的repo,同時向app.js傳送選定repo的資料用於repo component渲染
  const showRepoHandler = (repo) => {
    props.selectRepoHandler(repo);
    navigate(`/users/${username}/repos/${repo.name}`);
  };

  //管理Infinite Scroll
  const scrollHandler = (totalPage) => (event) => {
    const scrollHeight = event.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      event.target.documentElement.scrollTop + window.innerHeight
    );
    //捲動到底部更新curPage, 觸發SearchUser()再次發送req再請求10筆repo資料
    if (currentHeight + 1 >= scrollHeight) {
      setCurPage((curPage) => (curPage >= totalPage ? curPage : curPage + 1));
    }
  };

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      window.addEventListener("scroll", scrollHandler(totalPage));
    }
    return () => {
      unmounted = true;
    };
  }, [totalPage]);

  return (
    <>
      {isValid && (
        <>
          <UserInfoBox userInfo={userInfo} />
          <div className={classes.headerBar}>
            <p>Repositories</p>
            <p className={classes.repoCount}>{`${userInfo.public_repos}`}</p>
          </div>
          <div className={classes.repoList}>
            {userRepos.map((repo) => {
              return (
                <RepoBox
                  key={repo.id}
                  repo={repo}
                  showRepoHandler={showRepoHandler}
                />
              );
            })}
            <div className={classes.repoFooter}>
              <i className="fa-solid fa-circle"></i>
            </div>
          </div>
        </>
      )}
      {isValid === false && (
        <Link to={`/`} className={classes.errorMessage}>
          oops! something went wrong! try another username!
        </Link>
      )}
    </>
  );
};

export default Users;
