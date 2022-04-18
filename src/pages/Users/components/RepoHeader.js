import styled from "styled-components";

const RepoHeader = ({ className, repoCount }) => {
  return (
    <>
      <div className={className}>
        <p>Repositories</p>
        <p className="repoCount">{`${repoCount}`}</p>
      </div>
    </>
  );
};

const StyledRepoHeader = styled(RepoHeader)`
  font-weight: 600;
  color: #ddd;
  font-size: 5rem;
  height: 7rem;
  margin: auto;
  width: 80vw;
  max-width: 1200px;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0 0 0 1rem;
  }

  .repoCount {
    color: #333;
    padding: 1rem 0.5rem 1.2rem 0.5rem;
    font-size: 2.5rem;
    height: 2rem;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    background-color: #ddd;
    border-radius: 25px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    height: 5rem;

    .repoCount {
      margin-left: 0.5rem;
      font-size: 1.5rem;
      height: 0.5rem;
    }
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    height: 4rem;

    .repoCount {
      font-size: 0.8rem;
      height: 0.2rem;
    }
  }
`;

export default StyledRepoHeader;
