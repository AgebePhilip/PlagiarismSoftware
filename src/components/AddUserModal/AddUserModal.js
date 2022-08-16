import React, {useState} from "react";
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
} from "./AddUserModal.Style";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const AddUserModal = ({ open, onClose, getData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const postData = (data) => {
    axios.post(`https://6286d96de9494df61b2e3243.mockapi.io/UsersData`, {
    name,  
    email,
    password
    }).then(() => {
      getData()
    });
  };


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (!open) return null;

  const onSubmitHandler = (data) => {
    onClose()
    reset()
  };

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
            <LoginHeader>Add User</LoginHeader>
            <Close onClick={onClose} className="closeBtn">
              X
            </Close>

            <Input
              {...register("name")}
              placeholder="Please enter your name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

            <Input
              {...register("email")}
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Input
              {...register("password")}
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type="submit" onClick={postData}>
              add
            </Button>
          </FormContainer>
        </ModalContainer>
      </Overlay>
    </div>
  );
};

export default AddUserModal;
