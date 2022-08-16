import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import AddUserModal from "../AddUserModal/AddUserModal";
import UpdateModal from "../UpdateModal/UpdateModal";
import {
  UserContainer,
  HeaderText,
  Button,
  TableWrapper,
  THead,
  TBody,
  TH,
  TR,
  TD,
  EditButton,
  DeleteButton,
} from "./Users.Style";

const Users = () => {
  const [APIData, setAPIData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);


  useEffect(() => {
    axios
      .get(`https://6286d96de9494df61b2e3243.mockapi.io/UsersData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);


  const onDelete = (id) => {
    axios.delete(`https://6286d96de9494df61b2e3243.mockapi.io/UsersData/${id}`).then(() => {
      getData();
    })
  }

  // updating the table after a delete operation
  const getData = () => {
    axios.get(`https://6286d96de9494df61b2e3243.mockapi.io/UsersData`).then((getData) => {
      setAPIData(getData.data)
    })
  }


  const setData = (data) => {
    let {id, name, email, password} =data
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password)
    setUpdateModal(true)
  }


  
  return (
    <div>
      <HeaderText>Users</HeaderText>
      <UserContainer className="user-container">
        <Button onClick={() => setOpenModal(true)}>add</Button>
      </UserContainer>
      <AddUserModal open={openModal} onClose={() => setOpenModal(false)} getData={getData} />
      <TableWrapper>
        <THead>
          <TR>
            <TH>ID</TH>
            <TH>name</TH>
            <TH>email address</TH>
            <TH>edit/delete</TH>
          </TR>
        </THead>
        {APIData.map((data, i) => {
          return (
            <TBody key={i}>
              <TR>
                <TD>{data.id}</TD>
                <TD>{data.name}</TD>
                <TD>{data.email}</TD>
                <TD
                  style={{
                    fontSize: "1.5em",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: "0.4em"
                  }}
                >
                  <EditButton className="edit-button" onClick={() => setData(data)} getData={getData}>
                    <FiEdit />
                  </EditButton>
                  <DeleteButton onClick={() => onDelete(data.id)} className="delete-button">
                    <AiFillDelete />
                  </DeleteButton>
                </TD>
              </TR>
            </TBody>
          );
        })}
      </TableWrapper>
      <UpdateModal  open={updateModal} onClose={() => setUpdateModal(false)}/>
    </div>
  );
};

export default Users;
