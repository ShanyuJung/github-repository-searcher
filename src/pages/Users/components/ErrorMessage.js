import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorMessage = ({ className, path, children }) => {
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
};

const StyledErrorMessage = styled(ErrorMessage)`
  color: #ddd;
  font-size: 2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: fit-content;
  margin: 30vh auto;
`;

export default StyledErrorMessage;
