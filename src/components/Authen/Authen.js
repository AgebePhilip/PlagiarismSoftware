import React, { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  SignUpOverlay,
  LoginOverlay,
  SignupHeader,
  SmallText,
  SignUpButton,
  LoginHeader,
  SignInButton,
  FormContainer,
  LogoContainer,
  Logo
} from "./Authen.Style";

const Authen = () => {
  const [index, setIndex] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <LogoContainer className="logo-container">
        <Logo src={logo} alt="" onClick={() => navigate("/")} />
      </LogoContainer>
      <FormContainer className="form-container">
        {!index ? <Login /> : <SignUp />}
        {!index ? (
          <SignUpOverlay className="signup-overlay">
            <SignupHeader className="signup-Header">
              Hello, Friend!
            </SignupHeader>
            <SmallText>
              Enter your details and start journey with us
            </SmallText>
            <SignUpButton onClick={() => setIndex(true)}>Sign Up</SignUpButton>
          </SignUpOverlay>
        ) : (
          <LoginOverlay className="login-overlay">
            <LoginHeader className="login-Header"> Welcome Back!</LoginHeader>
            <SmallText>
              keep connected with us please login with your personal info
            </SmallText>
            <SignInButton onClick={() => setIndex(false)}>Login</SignInButton>
          </LoginOverlay>
        )}
      </FormContainer>
    </div>
  );
};

export default Authen;
