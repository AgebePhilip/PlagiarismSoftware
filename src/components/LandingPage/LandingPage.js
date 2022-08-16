import APC from "../../assets/logo.png";
import Avatar from "../../assets/People search-bro.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  CheckerContainer,
  TextArea,
  ButtonContainer,
  LocalButton,
  WebButton,
  LogoContainer,
  Logo,
  HeroSection,
  HeroAvatar,
  AvatarImage,
  HeroText,
  BoldText,
  Button,
  ReportContainer,
  ReportDetails,
  ResultsWrapper,
  Plagiarised,
  NonPlagiarised,
  Content,
  SourceWrapper,
  Percentage,
  Text,
  SourceText,
  CloseButton
} from "./LandingPage.Style";

const LandingPage = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleAuthentication = () => {
    navigate("/authen");
  };

  
  return (
    <div>
      <LogoContainer className="logo-container">
        <Logo src={APC} alt="" />
      </LogoContainer>

      <HeroSection className="hero-section">
        <HeroAvatar className="avatar">
          <AvatarImage src={Avatar} alt="" />
        </HeroAvatar>

        <HeroText className="hero-text">
          Final Year Computer Science <BoldText>plagiarism</BoldText>,
          Project <BoldText> Built with </BoldText> React and Python ...
        </HeroText>

        <Button onClick={handleAuthentication}>let's find out</Button>
      </HeroSection>

      <CheckerContainer className="checker-container">
        <TextArea
          placeholder="Please insert your text to check for plagiarism either against the web or the local corpus"
          name="text"
          id=""
          cols="30"
          rows="10"
        ></TextArea>
        <ButtonContainer className="button-container">
          <LocalButton onClick={() => setShow(true)}>
            local check
          </LocalButton>
          <WebButton onClick={() => setShow(true)}>Online check</WebButton>
        </ButtonContainer>
      </CheckerContainer>

      {show &&   <ReportContainer className="report-container">
      <CloseButton onClick={() => setShow(false)}>X</CloseButton>

<ReportDetails className="report-details">
  <ResultsWrapper className="percentage-container">
    <Plagiarised className="plagiarised">
      <Percentage>60%</Percentage>
      <Text>Plagiarised content</Text>
    </Plagiarised>
    <NonPlagiarised className="non-plagiarised">
      <Percentage>40%</Percentage>
      <Text>Unique content</Text>
    </NonPlagiarised>
  </ResultsWrapper>

  <Content className="content"></Content>

  <SourceWrapper className="source-wrapper">
    <SourceText>Sources</SourceText>
  </SourceWrapper>
</ReportDetails>
        </ReportContainer>
      }
    </div>
  );
};

export default LandingPage;
