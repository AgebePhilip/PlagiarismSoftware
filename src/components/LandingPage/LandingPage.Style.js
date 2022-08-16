import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 14%;
  height: 18vh;
  margin-left: 2em;
`;

export const Logo = styled.img`
  max-height: 100%;
`;

export const HeroSection = styled.div`
  width: 100%;
  height: 80vh;
`;
export const HeroAvatar = styled.div`
  width: 40%;
  height: 80%;
  position: absolute;
  top: 8%;
  left: 2%;
`;
export const AvatarImage = styled.img`
  max-height: 100%;
  z-index: 20;
`;

export const HeroText = styled.h1`
  position: absolute;
  top: 20%;
  left: 43%;
  width: 55%;
  font-weight: lighter;
  font-size: 3em;
`;
export const BoldText = styled.span`
  font-weight: normal;
  font-size: 1.5em;
  color: #eea40e;
`;

export const Button = styled.button`
  position: absolute;
  top: 68%;
  left: 43%;
  width: 14%;
  height: 10vh;
  background-color: #eea40e;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 8px;

  &:hover {
    color: #eea40e;
    background-color: white;
    cursor: pointer;
  }
`;

export const CheckerContainer = styled.div`
  width: 80%;
  height: 55vh;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
`;

export const TextArea = styled.textarea`
  margin-top: 3em;
  margin-left: 3em;
  width: 90%;
  height: 30vh;
  border: 3px solid #eea40e;
  border-radius: 8px;
  font-size: 1.2em;
  color: black;

  &::placeholder {
    font-size: 1em;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 34%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  margin-left: 20.5em;
`;

export const LocalButton = styled.button`
  width: 120px;
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
  width: 120px;
  height: 8vh;
  border: none;
  background-color: black;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  margin-left:4em;

  &:hover {
    cursor: pointer;
  }
`;

export const ReportContainer = styled.div`
  width: 80%;
  height: 84vh;
  margin: 2em auto;
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