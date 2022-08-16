import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  FormContainer,
  Input,
  LoginHeader,
  ErrorMessage,
  Button,
  ModalContainer,
  Overlay,
  Close,
} from "./AdminModal.Style";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const AdminModal = ({ open, onClose }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const Navigate = useNavigate();

  const {
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  

  const getData = async () => {
    try {
      const result = await axios.get(
        `https://6286d96de9494df61b2e3243.mockapi.io/AdminData`
      );
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitHandler = () => {
    const auth = data.filter((infoData) => infoData.password === password);
    if (auth) {
      toast.success("Login Successful");
      Navigate("/Adminboard");
    } else {
      toast.error("please check your password");
    }
    reset();
  };


  if (!open){
    return null
  }
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <Overlay onClick={onClose} className="overlay">
        <ModalContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <FormContainer onSubmit={onSubmitHandler}>
            <LoginHeader>Admin Login</LoginHeader>
            <Close onClick={onClose} className="closeBtn">
              X
            </Close>
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

            <Button type="submit" onClick={getData}>Login</Button>
          </FormContainer>
        </ModalContainer>
      </Overlay>
    </div>
  );
};

export default AdminModal;
