import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ className }) => {
  return (
    <Link to={`/`} className={className}>
      <i className="fa-brands fa-github fa-2xl"></i> Github Repository Searcher
    </Link>
  );
};

const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  color: #ddd;
  background-color: #121212;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  text-decoration: none;
  width: 100vw;
  font-weight: 600;
  z-index: 1;

  :hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export default StyledHeader;
