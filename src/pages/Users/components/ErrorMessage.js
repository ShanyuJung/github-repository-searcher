import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorMessage = ({ className }) => {
  return (
    <Link to={`/`} className={className}>
      oops! something went wrong! try another username!
    </Link>
  );
};

const StyledErrorMessage = styled(ErrorMessage)`
  color: #ddd;
  font-size: 2rem;
  text-transform: uppercase;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  transform: translate(0%, -20%);
  text-align: center;
`;

export default StyledErrorMessage;
