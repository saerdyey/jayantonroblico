import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const PingContainer = styled.div`
  width: 90%;
  position: absolute;
  /* z-index: -1; */
  transform: ${({ isOpen }) =>
    isOpen
      ? "translateX(0) translateY(-350px);"
      : "translateX(0) translateY(100px);"};

  background-color: #fff;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  transition: 0.4s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

export const PingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  background-color: #010606;
  color: #fff;
  position: relative;
  border-radius: 10px 10px 0px 0px;
`;

export const PingH3 = styled.h3`
  color: #fff;
`;

export const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: #010606;
  position: absolute;
  top: -10px;
  right: 50px;
  transform: rotate(45deg);
`;

export const PingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;

  .input-group {
    margin-bottom: 5px;
    display: block;
  }
  label {
    margin-right: 5px;
    font-size: 12px;
    color: #000;
  }
  input {
    height: 26px;
    width: 100%;
    font-size: 16px;
  }
  textarea {
    width: 100%;
    resize: none;
    font-size: 16px;
  }
  #submit-btn {
    align-self: center;
    width: 100px;
    height: 42px;
    border-radius: 2px;
    border: none;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-align: center;

    &:hover {
      transition: all 0.2 ease-in-out;
      background: #007e49;
      color: #ffffff;
    }
  }
  p {
    padding-bottom: 10px;
    color: #000;
  }
`;

export const FaTime = styled(FaTimes)`
  position: absolute;
  top: 0px;
  right: 0;
  font-size: 20px;
  margin: 5px 5px 0px 0px;
  &:hover {
    cursor: pointer;
  }
`;
export const PingSend = styled.div`
  align-self: center;
  width: 100px;
  border-radius: 2px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #007e49;
    color: #ffffff;
  }
`;
