import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  width: 120%;
  height: 120%;
  top: -20%;
  left: -20%;
  z-index: 20;
`;

export const ModalContainer = styled.div`
  border-radius: 10px;
  margin: 12em auto;
  width: 30%;
  height: 40vh;
  background-color: white;
  color: #eea40e;
`;

export const HeaderText = styled.h2`
  padding-bottom: 0.4em;
  font-size: 2em;
  color: #eea40e;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  width: 20em;
  height: 18vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1em auto;
`;

export const Button = styled.button`
  width: 7em;
  height: 8vh;
  border: none;
  background-color: #eea40e;
  font-size: 1.3em;
  font-weight: bold;
  border-radius: 8px;

  color: white;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

export const Close = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: black;
  padding-top: 1em;
  margin-left: 22.5em;

  &:hover {
    cursor: pointer;
  }
`;
