import styled from "styled-components";


export const UserContainer = styled.div`
    width: 80%;
    height: 100vh;
    position: absolute;
    top: 18%;
    left: 18%;
    background-color: white;
    border-radius: 10px;
`;

export const HeaderText = styled.h1`
    color: #EEA40E;
    position: absolute;
    top: 2%;
    left: 50%;
    font-size: 4em;
`;

export const Button = styled.button`
    width: 10%;
    height: 8vh;
    background-color: #EEA40E;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.3em;
    font-weight: bold; 
    margin-left: 44em;
    margin-top: 2em;
`;


export const TableWrapper = styled.table`
    width: 71%;
    position: absolute;
    top: 35%;
    left: 23%;
    color: #EEA40E;
    border-collapse: collapse;
`;

export const THead = styled.thead`
    background-color: #EEA40E;
    color: white;
    height: 8vh;
`;

export const TBody = styled.tbody`
    height: 8vh;
    text-align: center;
    color: black;
    font-size: 1em;
    font-weight: lighter;
    &:hover{
      background-color: #FBE5B9;
      font-weight: bold;
  }
`;

export const TR = styled.tr`
  
`;

export const TH = styled.th`
  
`;

export const TD = styled.td`
  
`;

export const EditButton = styled.div`
    /* border: 1px solid red; */
    cursor: pointer;
`;

export const DeleteButton = styled.div`
    /* border: 1px solid black;  */
    cursor: pointer;
`;