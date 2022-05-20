import styled from "styled-components";

const RepoFooter = ({ className }) => {
  return (
    <div className={className}>
      <i className="fa-solid fa-circle"></i>
    </div>
  );
};

const StyledRepoFooter = styled(RepoFooter)`
  color: #ddd;
  font-size: 0.3rem;
  opacity: 0.3;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default StyledRepoFooter;
