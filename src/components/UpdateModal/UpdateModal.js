import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormContainer,
  Input,
  LoginHeader,
  ErrorMessage,
  Button,
  ModalContainer,
  Overlay,
  Close,
} from "./UpdateModal.Style";
import axios from "axios";

const schema = yup.object().shape({
    name: yup.string().min(8).max(32).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const UpdateModal = ({ open, onClose, getData }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem("ID"))
        setName(localStorage.getItem("Name"))
        setEmail(localStorage.getItem("Email"))
        setPassword(localStorage.getItem("Password"))
    }, [])



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (!open) return null;
  const onSubmitHandler = (data) => {
    onClose()
  };


  const sendDataAPI = () => {
    
      axios.put(`https://6286d96de9494df61b2e3243.mockapi.io/UsersData/${id}`, {
          name,
          email,
          password
      })
      getData()
  }

  return (
    <div>
      <Overlay onClick={onClose} className="overlay">
        <ModalContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
            <LoginHeader>Edit User Details</LoginHeader>
            <Close onClick={onClose} className="closeBtn">
              X
            </Close>
            <Input
              {...register("name")}
              placeholder="Please enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            <Input
              {...register("email")}
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Input
              {...register("password")}
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type="submit" onClick={sendDataAPI}>update</Button>
          </FormContainer>
        </ModalContainer>
      </Overlay>
    </div>
  );
};

export default UpdateModal;
