import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
`;

export const HeaderText = styled.h2`
  padding-bottom: 0.4em;
  font-size: 2.5em;
  color: white;
  text-align: center;
`;

export const ModalContainer = styled.div`
  margin: 2em auto;
  width: 50%;
  height: 80vh;
`;

export const FormContainer = styled.form`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: white;
`;

export const Description = styled.textarea`
  margin-left: 3em;
  margin-top: 1.9em;
  width: 83%;
  padding: 1em;
  height: 10vh;
  outline: none;
  border: none;
  background-color: #e2e0de;
  color: black;
  border-radius: 8px;
  font-size: 1.2em;

  &::placeholder {
    font-size: 1em;
    font-weight: lighter;
    color: black;
  }
`;

export const TextContent = styled.input`
  margin-left: 3em;
  margin-top: 1.9em;
  width: 83%;
  height: 30vh;
  border-radius: 8px;
  background-color: #e2e0de;
  border: 3px dashed grey;
  color: black;
  font-size: 1.2em;
  font-weight: lighter;
  padding-left: 1em;
  padding-top: 1em;
  outline: none;


  &::placeholder {
    font-size: 1em;
    font-weight: lighter;
    color: black;
  }

  &::file-selector-button{
    position: absolute;
    left: 45%;
    margin-top: 2em;
    width: 7em;
    background-color: #EEA40E;
    height: 7vh;
    border-radius: 10px;
    border: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold; 

    &:hover{
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  width: 15em;
  height: 8vh;
  border-radius: 8px;
  margin-top: 2em;
  margin-right: auto;
  margin-left: auto;
  background-color: #e2e0de;
  color: black;
  font-size: 1em;
  padding: 0.4em;
  border: none;
  outline: none;

  &::placeholder {
    color: black;
    padding: 0.4em;
    font-size: 1em;
  }
`;

export const InputContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-left: 2.5em;
`;

export const Close = styled.p`
  font-size: 1.3em;
  color: black;
  position: absolute;
  top: 15%;
  left: 73%;

  &:hover {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-left: 3em;
`;

export const Button = styled.button`
  width: 22%;
  height: 8vh;
  border: none;
  margin-left: 3em;
  margin-top: 0.8em;
  background-color: black;
  font-size: 1.3em;
  font-weight: bold;
  border-radius: 8px;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #e2e0de;
    color: black;
  }
`;
