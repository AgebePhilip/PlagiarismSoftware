import styled from "styled-components";

export const DocumentContainer = styled.div`
  width: 80%;
  height: 100vh;
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

export const FilesContainer = styled.div`
  width: 92.5%;
  height: 75%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 1em 1em;
  border: 1px solid #eea40e;
  border-radius: 10px;
  margin: 1em auto;
  overflow-y: scroll;
`;

export const Button = styled.button`
  width: 10em;
  height: 8vh;
  background-color: #eea40e;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.3em;
  font-weight: bold;
  margin-left: 2em;
  margin-top: 2em;

  &:hover {
    cursor: pointer;
  }
`;
