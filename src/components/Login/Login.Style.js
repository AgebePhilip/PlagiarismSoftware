import styled from "styled-components";


export const LoginHeader = styled.h2`
  padding-top: 0.8em;
  font-size: 2.2em;
  color: white;
  text-align: center;
`;

export const FormContainer = styled.form`
  margin-left: 8.1rem;
  width: 26%;
  height: 70vh;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eea40e;
  position: absolute;
  top: 23%;
  left: 13.7%;
`;

export const Input = styled.input`
  width: 80%;
  height: 7vh;
  border-radius: 8px;
  margin: 1em 2.5em;
  padding: 0.4em;
  color: #eea40e;
  font-size: 1.2em;
  border: none;
  outline: none;

  &::placeholder {
    color: #eea40e;
    padding: 0.4em;
    font-size: 1em;
  }
`;

export const ErrorMessage = styled.p`
  color: #d65d2d;
  margin-left: 3em;
`;

export const Button = styled.button`
  width: 7rem;
  height: 8vh;
  border: none;
  margin-left: 2.2em;
  margin-top: 0.8em;
  background-color: black;
  font-size: 1.3em;
  font-weight: bold;
  border-radius: 8px;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #eea40e;
  }
`;
