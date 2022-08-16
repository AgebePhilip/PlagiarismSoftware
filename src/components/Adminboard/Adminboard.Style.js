import styled from "styled-components";

export const DashLogo = styled.div`
  width: 14%;
  height: 18vh;
  margin-left: 2em;
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const SidebarContainer = styled.div`
  width: 14%;
  height: 80vh;
  margin-left: 2em;
  background-color: #eea40e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const LogoutButton = styled.button`
 height: 15vh;
  padding-top: 1.5em;
  font-size: 1.4em;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: #EEA40E;
  color: white;
  display: flex;
  justify-content: center;

  &:hover{
    background-color: white;
    color: #EEA40E;
  }
`;
