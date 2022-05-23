import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBar = ({ className }) => {
  const navigate = useNavigate();
  const inputRef = useRef("");

  const searchUserHandler = () => {
    if (inputRef.current.value !== "" && inputRef.current.value !== undefined) {
      navigate(`/users/${inputRef.current.value}/repos`);
      return;
    }
    alert("Please Enter at least one character");
  };

  return (
    <div className={className}>
      <input
        onKeyDown={(event) => event.key === "Enter" && searchUserHandler()}
        placeholder="Enter an username"
        ref={inputRef}
      />
      <button onClick={searchUserHandler}>
        <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
      </button>
    </div>
  );
};

const StyledSearchBar = styled(SearchBar)`
  position: relative;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -200%);
  display: flex;
  justify-content: center;

  input {
    height: 60px;
    width: 300px;
    font-size: 2rem;
    background-color: #333;
    border: 2px solid #fff;
    border-right: none;
    border-radius: 30px 0px 0px 30px;
    padding: 0 20px;
    color: #fff;
  }

  button {
    height: 64px;
    width: 64px;
    border: 2px solid #fff;
    border-radius: 0px 32px 32px 0px;
  }

  button:hover {
    background-color: #333;
    color: #fff;
  }
`;

export default StyledSearchBar;
