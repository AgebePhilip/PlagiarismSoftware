import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormContainer,
  Input,
  LoginHeader,
  ErrorMessage,
  Button,
} from "./Login.Style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const {
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();


  // const notify = () => toast.success("sign up successful, login now");

  const getData = async () => {
    try {
      const result = await axios.get(
        `https://7e0440ee-900a-4833-8fba-d0354738cf2d.mock.pstmn.io`
      );
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmitHandler = () => {
    const auth = data.map(
      (infoData) => infoData.password ===  password && infoData.email === email
    );
    
    if (auth) {
      toast.success("Login Successful");
      navigate("/dashboard");
    } else {
      
    }
    reset();
  };

 

  useEffect(() => {
    getData();
  }, []);

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

      <FormContainer onSubmit={onSubmitHandler}>
        <LoginHeader>Lets sign you in.</LoginHeader>

        <Input
          {...register("email")}
          placeholder="email"
          data-testid = "input"
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

        <Button type="submit" onClick={getData}>
          Login
        </Button>
      </FormContainer>
    </div>
  );
};

export default Login;
