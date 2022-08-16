import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormContainer,
  Input,
  LoginHeader,
  ErrorMessage,
  Button,
} from "./SignUp.Style";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup.string().min(8).max(32).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => toast.success("sign up successful, login now");

  const postData = (data) => {
    axios.post(`https://7e0440ee-900a-4833-8fba-d0354738cf2d.mock.pstmn.io/Login`, {
      name,
      email,
      password,
    });

    notify();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    reset();
  };

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
      <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
        <LoginHeader>Insert your details</LoginHeader>

        <Input
          {...register("name")}
          placeholder="please in insert your name"
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
          Sign Up
        </Button>
      </FormContainer>
    </div>
  );
};

export default SignUp;
