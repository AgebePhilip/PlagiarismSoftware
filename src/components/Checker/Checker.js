import React, { useState } from "react";

import {
  CheckerContainer,
  HeaderText,
  TextArea,
  ButtonContainer,
  LocalButton,
  WebButton,
} from "./Checker.Style";
import Report from "../Report/Report";
const Checker = () => {
  const [input, setInput]=useState('');
  const[openReport,setOpenReport]=useState();
 
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };//backend navigator link
  return (
    <>
      <HeaderText>Let's Check Here</HeaderText>
      <CheckerContainer className="checker-container">
        <TextArea
          placeholder="Please insert your text to check against plagiarism "
          name="text"
          id=""
          cols="30"
          rows="10"
          value={input}
          onChange={e=>setInput(e.target.value)}
        ></TextArea>
        <ButtonContainer className="button-container">
          <LocalButton onClick={()=>setOpenReport(true)}>local check</LocalButton>
          <WebButton onClick={()=>openInNewTab("https://plagiarism-detection--hariambethkar.repl.co")}>Online Check</WebButton>

          <LocalButton onClick={()=>openInNewTab("https://plagiarism-detector-in-js.herokuapp.com")}>Check Plagiarism</LocalButton>
          
        </ButtonContainer>
      </CheckerContainer>
      <Report open={openReport} onClose={() => setOpenReport(false)}/>
    </>
  );
};

export default Checker;
