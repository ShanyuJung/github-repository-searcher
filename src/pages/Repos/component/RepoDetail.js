import styled from "styled-components";

const RepoDetail = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledRepoDetail = styled(RepoDetail)`
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  border-bottom: #6e7681 1px solid;
  cursor: default;

  i {
    font-size: 1.2rem;
    margin: auto 10px;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;

    i {
      font-size: 1rem;
    }
  }
`;

export default StyledRepoDetail;
