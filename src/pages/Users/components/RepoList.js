import styled from "styled-components";
import StyledRepoBox from "./RepoBox";

const RepoList = ({ className, userRepos, showRepoHandler, loading }) => {
  return (
    <div className={className}>
      {userRepos.map((repo) => {
        return (
          <StyledRepoBox
            key={repo.id}
            repo={repo}
            showRepoHandler={showRepoHandler}
          />
        );
      })}
    </div>
  );
};

const StyledRepoList = styled(RepoList)`
  margin: 1rem auto;
  width: 90vw;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

export default StyledRepoList;
