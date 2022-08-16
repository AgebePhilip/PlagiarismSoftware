import styled from "styled-components";

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
    border-radius: 10px;
    margin: 12em auto;
    width: 40%;
    height: 30vh;
    background-color: #EEA40E;
`;

export const HeaderText = styled.h2`
    padding-bottom: 0.4em;
    font-size: 2em;
    color: white;
    text-align: center;
`;
export const ButtonContainer = styled.div`
    width: 20em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em auto;
`

export const Button = styled.button`
    width: 7em;
    height: 8vh;
    border: none;
    background-color: white ;
    font-size: 1.3em;
    font-weight: bold;
    border-radius: 8px;
    
    color: #EEA40E;

    &:hover{
        cursor: pointer;
        background-color: white;
        color: black;
    }
`;

export const Close = styled.p`
    font-size: 1em;
    font-weight: bold;
    color: black;
    padding-top: 1em;
    margin-left: 32.5em;

    &:hover{
        cursor: pointer;
    }
`;