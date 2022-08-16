import React, { useEffect, useState } from "react";
import {
  DocumentContainer,
  HeaderText,
  Button,
  FilesContainer
} from "./Documents.Style";
import { DocumentState } from "../../Context/DocumentProvider";
import AddDocument from "../AddDocument/AddDocument";
import axios from "axios";
import SingleFile from "../Files/SingleFile";

const Documents = () => {
  const { documents, setDocuments } = DocumentState();

  const [addDocs, setAddDocs] = useState(false);

  const openInNewTab =url=>{
    window.open(url, '_blank','noopener','noreferrer');

  }; // this code is used to navigate to the backendserver built in python
  

  const getDocuments = () => {
    axios
      .get(`https://6286d96de9494df61b2e3243.mockapi.io/DocumentsData`)
      .then((Response) => {
        setDocuments(Response.data);
      });
  }

  useEffect (() => {
    getDocuments()
  })

  

  console.log(documents)

  return (
    <div>
      <HeaderText>Documents</HeaderText>
      <DocumentContainer className="document container">
        <Button onClick={() => setAddDocs(true)}>add document</Button>
        <Button onClick={()=>openInNewTab("https://plagiarism-checker-frontend.vercel.app/app")}>Check Document </Button>
        <FilesContainer className="files-container">
          {documents && (
            documents.map((document, i) => (
              <SingleFile document={document} getDocuments={getDocuments}/>
            ))
          )} 
        </FilesContainer>
      </DocumentContainer>
      <AddDocument open={addDocs} onClose={() => setAddDocs(false)} getDocuments={getDocuments}/>
    </div>
  );
};

export default Documents;
