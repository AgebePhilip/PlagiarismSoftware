import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 30%;
  margin-top: 2em;
  margin-left: 42%;
`;
export const Logo = styled.img``;


export const FormContainer = styled.div`
  flex-direction: column;
  margin: 0 auto;
`;

export const SignUpOverlay = styled.div`
  background-color: white;
  margin-left: 42rem;
  width: 25%;
  height: 70vh;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 23%;
`;

export const LoginOverlay = styled.div`
  background-color: white;
  margin-left: 10rem;
  width: 25%;
  height: 70vh;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 23%;
  left: 11.5%;
`;

export const SignupHeader = styled.h1`
  font-size: 2rem;
  color: black;
  margin-left: 4rem;
  margin-right: 4rem;
`;
export const SmallText = styled.p`
  width: 80%;
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
  color: black;
`;
export const SignUpButton = styled.button`
  width: 7rem;
  height: 8vh;
  background-color: #eea40e;
  color: black;
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 10px;
  margin: 2rem auto;

  &:hover {
    cursor: pointer;
  }
`;
export const LoginHeader = styled.h1`
  width: 80%;
  font-size: 2rem;
  color: black;
  margin-left: 3.6rem;
  margin-right: 4rem;
`;

export const SignInButton = styled.button`
  width: 7rem;
  height: 8vh;
  background-color: #eea40e;
  color: black;
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 10px;
  margin: 2rem auto;

  &:hover {
    cursor: pointer;
  }
`;
