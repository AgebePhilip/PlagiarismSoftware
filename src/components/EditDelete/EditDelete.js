import React, { useState } from "react";
import TextUpload from "../TextUpload/TextUpload";
import PDFUpload from "../PDFUpload/PDFUpload";
import {
  Overlay,
  ModalContainer,
  HeaderText,
  ButtonContainer,
  Button,
  Close,
} from "./EditDelete.Style";
import axios from "axios";

const EditDelete = (props) => {
  const [uploadText, setUploadText] = useState(false);
  const [uploadPDF, setUploadPDF] = useState(false);
  const close = props.onClose;
  const deleteFile = () => {
    const ID = props.data.id;

    axios
      .delete(`https://6286d96de9494df61b2e3243.mockapi.io/DocumentsData/${ID}`)
      .then(() => {
        props.getDocuments();
      });
    close();
  };

  if (!props.open) return null;
  return (
    <>
      <Overlay className="overlay" onClick={props.onClose}>
        <ModalContainer
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Close onClick={props.onClose}>X</Close>
          <HeaderText>click to edit or delete</HeaderText>
          <ButtonContainer className="button-container">
            <Button onClick={props.open}>edit</Button>
            {props.data.format === "PDF" ? (
              <PDFUpload open={uploadPDF} onClose={() => setUploadPDF(false)} />
            ) : (
              <TextUpload
                open={uploadText}
                onClose={() => setUploadText(false)}
              />
            )}
            <Button onClick={deleteFile}>delete</Button>
          </ButtonContainer>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default EditDelete;
