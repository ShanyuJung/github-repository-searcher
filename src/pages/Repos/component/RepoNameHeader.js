import styled from "styled-components";

const RepoNameHeader = ({ className, mapRepo }) => {
  return (
    <div className={className}>
      <a href={mapRepo["html_url"]} target="_blank">
        {mapRepo["full_name"]}
      </a>
    </div>
  );
};

const StyledRepoNameHeader = styled(RepoNameHeader)`
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  word-break: break-all;
  margin: 1rem auto 1rem auto;
  color: #ddd;

  a {
    color: #ddd;
  }

  a:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default StyledRepoNameHeader;
