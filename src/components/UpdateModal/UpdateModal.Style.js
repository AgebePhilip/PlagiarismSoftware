import styled from "styled-components";

export const LoginHeader = styled.h2`
    padding-top: 0.8em;
    padding-bottom: 0.4em;
    font-size: 2.5em;
    color: white;
    text-align: center;
`;

export const FormContainer = styled.form`
    border-radius: 10px;
    width: 100%;
    height: 70vh;
    margin: 0 auto;
    background-color: #EEA40E;
`;

export const Input = styled.input`
    width: 80%;
    height: 8vh;
    border-radius: 8px;
    margin: 1em 2.5em;
    padding: 0.4em;
    color: #EEA40E;
    font-size: 1.2em;
    border: none;
    outline: none;


    &::placeholder{
        color: #EEA40E;
        padding: 0.4em;
        font-size: 1em;
    }
`;

export const ErrorMessage = styled.p`
    color: #D65D2D;
    margin-left: 3em;
`;

export const Button = styled.button`
    width: 25%;
    height: 8vh;
    border: none;
    margin-left: 2.2em;
    margin-top: 0.8em;
    background-color: black;
    font-size: 1.3em;
    font-weight: bold;
    border-radius: 8px;
    color: white;

    &:hover{
        cursor: pointer;
        background-color: white;
        color: #EEA40E;
    }
`;

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    width: 100%;
    height: 120%;
    top: 0;
    left: 0;
    z-index: 20;
`;

export const ModalContainer = styled.div`
    margin: 10em auto;
    width: 40%;
`;
export const Close = styled.p`
    font-size: 1.8em;
    font-weight: bold;
    color: black;
    position: absolute;
    top: 22%;
    left: 67%;

    &:hover{
        cursor: pointer;
    }
`;