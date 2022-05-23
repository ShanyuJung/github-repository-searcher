import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useSearchUser from "../../API/SearchUser";
import { useEffect, useRef, useState } from "react";
import StyledUserInfoBox from "./components/UserInfoBox";
import StyledRepoHeader from "./components/RepoHeader";
import StyledRepoList from "./components/RepoList";
import StyledErrorMessage from "./components/ErrorMessage";
import StyledLoadingSpinner from "./components/LoadingSpinner";
import StyledRepoFooter from "./components/RepoFooter";

const Users = (props) => {
  const perPage = 10;
  const [curPage, setCurPage] = useState(1);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { username } = useParams();
  const { userInfo, isValid, userRepos, totalPage, loading } = useSearchUser(
    username,
    perPage,
    curPage
  );

  //導向選定的repo,同時向app.js傳送選定repo的資料用於repo component渲染
  const showRepoHandler = (repo) => {
    props.selectRepoHandler(repo);
    navigate(`/users/${username}/repos/${repo.name}`);
  };

  //Use intersectionObserver to manage Infinite Scroll

  const requestNewPageHandler = (entries) => {
    const [entry] = entries;
    // console.log(entry.isIntersecting);
    if (entry.isIntersecting && !loading && curPage < totalPage) {
      // console.log("send req by intersectionObserver");
      setCurPage((curPage) => (curPage >= totalPage ? curPage : curPage + 1));
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(requestNewPageHandler, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return (
    <>
      {totalPage === 1 && loading && (
        <LoadingBox>
          <StyledLoadingSpinner />
        </LoadingBox>
      )}
      {isValid && (
        <>
          <StyledUserInfoBox userInfo={userInfo} />
          <StyledRepoHeader repoCount={userInfo.public_repos} />
          <StyledRepoList
            userRepos={userRepos}
            showRepoHandler={showRepoHandler}
          />
          <FooterBox ref={containerRef}>
            {loading ? <StyledLoadingSpinner /> : <StyledRepoFooter />}
          </FooterBox>
        </>
      )}
      {isValid === false && (
        <StyledErrorMessage path="/">
          oops! something went wrong! try another username!
        </StyledErrorMessage>
      )}
    </>
  );
};

const FooterBox = styled.div`
  height: 50px;
  margin-bottom: 1rem;
`;

const LoadingBox = styled.div`
  height: 100px;
  margin-top: 1rem;
  padding: 1rem;
`;

export default Users;
