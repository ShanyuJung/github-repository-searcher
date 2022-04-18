import styled from "styled-components";

const RepoBox = ({ className, repo, showRepoHandler }) => {
  const UpdatedDate = new Date(repo.updated_at);

  return (
    <div className={className}>
      <div className="repoNameBox">
        <div className="repoName" onClick={() => showRepoHandler(repo)}>
          {repo.name}
        </div>
        <div className="repoStargazers"></div>
      </div>
      {
        //有description顯示description
        repo.description && (
          <div className="description">
            <p>{repo.description}</p>
          </div>
        )
      }
      <div className="repoDetail">
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

const StyledRepoBox = styled(RepoBox)`
  color: #ddd;
  font-size: 1rem;
  width: 90%;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);

  .repoNameBox {
    display: flex;
    width: 100%;
  }

  .repoName {
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .repoName:hover {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }

  .description {
    width: 100%;
    text-align: left;
    opacity: 0.5;
  }

  .description p {
    margin-bottom: 0;
  }

  .repoDetail {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    opacity: 0.5;
  }

  .repoDetail p {
    margin: 0 1rem 0 0.25rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default StyledRepoBox;
