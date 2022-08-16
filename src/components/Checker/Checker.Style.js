import styled from "styled-components";

export const CheckerContainer = styled.div`
  width: 80%;
  height: 55vh;
  position: absolute;
  top: 18%;
  left: 18%;
  background-color: white;
  border-radius: 10px;
`;

export const HeaderText = styled.h1`
  color: #eea40e;
  position: absolute;
  top: 2%;
  left: 40%;
  font-size: 4em;
`;
export const TextArea = styled.textarea`
  margin-top: 3em;
  margin-left: 3em;
  width: 80%;
  height: 30vh;
  border: 3px solid purple;
  border-radius: 8px;
  font-size: 1.2em;
  color: black;

  &::placeholder {
    font-size: 1.5em;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 54%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  margin-left: 18.5em;
`;

export const LocalButton = styled.button`
  width: 200px;
  height: 8vh;
  border: none;
  background-color: #eea40e;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const WebButton = styled.button`
  width: 200px;
  height: 8vh;
  border: none;
  background-color: black;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
