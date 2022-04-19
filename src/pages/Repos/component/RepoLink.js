import styled from "styled-components";
import { Link } from "react-router-dom";

const RepoLink = ({ className, path, children }) => {
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
};

const StyledRepoLink = styled(RepoLink)`
  color: #ddd;
  width: 100%;
  font-size: 2rem;
  font-weight: 600;

  :hover {
    color: #fff;
  }
`;

export default StyledRepoLink;
