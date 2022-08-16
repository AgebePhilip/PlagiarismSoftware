import React from "react";
import Dashboardlogo from "../../assets/logo.png";
import { BsUiChecks } from "react-icons/bs";
import { HiDocumentDuplicate, HiOutlineLogout } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { DashLogo, Logo, SidebarContainer, LogoutButton } from "./Adminboard.Style";

const Adminboard = () => {
  const navigate = useNavigate()
  return (
    <div>
      <DashLogo className="dash-logo">
        <Logo src={Dashboardlogo} alt="" onClick={() => navigate("/")}/>
      </DashLogo>

      <SidebarContainer className="sidebar-container">
        <NavLink
          to="checker"
          style={({ isActive }) => ({
            color: isActive ? "#EEA40E" : "white",
            background: isActive ? "white" : "#EEA40E",
            textDecoration: "none",
            height: "15vh",
            paddingLeft: "1.5em",
            paddingTop: "1.5em",
            fontSize: "1.4em",
            fontWeight: "bold",
            borderRadius: "8px",
          })}
        >
          <BsUiChecks style={{ paddingTop: "0.2em" }}/>
          P.Checker
        </NavLink>
        <NavLink
          to="documents"
          style={({ isActive }) => ({
            color: isActive ? "#EEA40E" : "white",
            background: isActive ? "white" : "#EEA40E",
            textDecoration: "none",
            height: "15vh",
            paddingLeft: "1.5em",
            paddingTop: "1.5em",
            fontSize: "1.4em",
            fontWeight: "bold",
            borderRadius: "8px",
          })}
        >
          <HiDocumentDuplicate style={{ paddingTop: "0.2em" }}/>
          Documents
        </NavLink>
        <NavLink
          to="users"
          style={({ isActive }) => ({
            color: isActive ? "#EEA40E" : "white",
            background: isActive ? "white" : "#EEA40E",
            textDecoration: "none",
            height: "15vh",
            paddingLeft: "1.5em",
            paddingTop: "1.5em",
            fontSize: "1.4em",
            fontWeight: "bold",
            borderRadius: "8px",
          })}
        >
          <FaUsers style={{ paddingTop: "0.2em" }}/>
          Users
        </NavLink>
        <LogoutButton onClick={() => navigate("/")}>
          <HiOutlineLogout />
          logout
        </LogoutButton>
      </SidebarContainer>
      <Outlet />
    </div>
  );
};

export default Adminboard;
