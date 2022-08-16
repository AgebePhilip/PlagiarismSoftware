import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, Button, Content } from "./Sidebar.Style";
import { RiAdminFill } from "react-icons/ri";
import { BsUiChecks } from "react-icons/bs";
import { HiDocumentDuplicate } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

import AdminModal from "../AdminModal/AdminModal";
import { NavLink, Outlet } from "react-router-dom";
const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <SidebarContainer className="sidebar-container">
        
        <Button onClick={() => setOpenModal(true)}>
          <Content className="content">
            <RiAdminFill style={{ color: "white" }} />
            Admin
          </Content>
        </Button>

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
          <BsUiChecks style={{ paddingTop: "0.2em" }} />
          Checker
        </NavLink>
        <NavLink
          to="documents"
          style={({ isActive }) => ({
            color: isActive ? "#EEA40E" : "white",
            background: isActive ? "white" : "#EEA40E",
            textDecoration: "none",
            height: "15vh",
            paddingLeft: "1em",
            paddingTop: "1.5em",
            fontSize: "1.4em",
            fontWeight: "bold",
            borderRadius: "8px",
          })}
        >
          <HiDocumentDuplicate style={{ paddingTop: "0.2em" }} />
          Documents
        </NavLink>
        <Button onClick={() => navigate("/")}>
          <Content>
            <FiLogOut style={{ paddingTop: "0.2em" }}/>
            Logout
          </Content>
        </Button>
      </SidebarContainer>
      <AdminModal open={openModal} onClose={() => setOpenModal(false)} />
      <Outlet />
    </div>
  );
};

export default Sidebar;
