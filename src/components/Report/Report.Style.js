import styled from "styled-components";

export const ReportContainer = styled.div`
  width: 80%;
  height: 84vh;
  position: absolute;
  top: 77%;
  left: 18%;
  background-color: white;
  border-radius: 10px;
`;

export const ReportDetails = styled.div`
  margin-top: 1em;
  margin-left: 1.5em;
  width: 96%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ResultsWrapper = styled.div`
  width: 20%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Plagiarised = styled.div`
  background-color: #eea40e;
  width: 100%;
  height: 32vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
`;
export const Percentage = styled.h1`
  text-align: center;
  font-size: 4em;
  margin: 0 auto;
`;
export const Text = styled.p`
  font-size: 1em;
  font-weight: lighter;
`;

export const NonPlagiarised = styled.div`
  background-color: black;
  width: 100%;
  height: 32vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  border-radius: 10px;
  border: 1px solid #eea40e;
  width: 56%;
  height: 73vh;
  overflow-y: scroll;
`;
export const SourceWrapper = styled.div`
  background-color: #fbe5b9;
  width: 22%;
  height: 10vh;
  border-radius: 10px;
  text-align: center;
`;

export const SourceText = styled.h1`
  font-size: 2.5em;
  margin-top: 0.2em;
  color: black;
`;

export const CloseButton = styled.button`
  margin-top: 4px;
  margin-left: 78em;
  width: 2em;
  height: 2em;
  background-color: #FBE5B9;
  border: none;
  border-radius: 20px;
  color: black;
  font-weight: bold;

  &:hover{
    cursor: pointer;
  }
`;
