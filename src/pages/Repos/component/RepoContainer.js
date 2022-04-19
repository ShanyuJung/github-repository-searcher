import styled from "styled-components";

const RepoContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledRepoContainer = styled(RepoContainer)`
  color: #ddd;
  width: 90vw;
  max-width: 1000px;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

export default StyledRepoContainer;
