import styled from "styled-components";

const LoadingSpinner = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="spinner"></div>
      </div>
    </>
  );
};

const StyledLoadingSpinner = styled(LoadingSpinner)`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;

  .spinner {
    width: 20px;
    height: 20px;
    border: 8px solid rgba(204, 204, 204, 0.5);
    border-top: 8px solid #333;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;

export default StyledLoadingSpinner;
