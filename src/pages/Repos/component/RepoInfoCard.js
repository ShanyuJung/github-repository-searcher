import styled from "styled-components";

const RepoInfoCard = ({ className, header, children }, props) => {
  return (
    <div className={className}>
      <div className="cardHeader">{header}</div>
      <div className="cardContent">{children}</div>
    </div>
  );
};

const StyledRepoInfoCard = styled(RepoInfoCard)`
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  .cardHeader {
    width: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    margin: auto;
    border-bottom: 2px solid #6e7681;
    cursor: default;
  }

  .cardContent {
    width: 100%;
    margin: auto;
  }

  @media (max-width: 576px) {
    width: 90%;

    .cardHeader {
      font-size: 1.5rem;
    }
  }
`;

export default StyledRepoInfoCard;
