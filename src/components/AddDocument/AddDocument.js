import { useState  } from "react";
import {
  Overlay,
  ModalContainer,
  HeaderText,
  ButtonContainer,
  Button,
  Close,
} from "./AddDocument.Style";
import TextUpload from "../TextUpload/TextUpload";
import PDFUpload from "../PDFUpload/PDFUpload";

const AddDocument = ({ open, onClose, getDocuments }) => {
  const [uploadText, setUploadText] = useState(false);
  const [uploadPDF, setUploadPDF] = useState(false);
  if (!open) return null;

  return (
    <>
      <Overlay className="overlay" onClick={onClose}>
        <ModalContainer
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Close onClick={onClose}>X</Close>
          <HeaderText>click to upload a PDF or text</HeaderText>
          <ButtonContainer className="button-container">
            <Button onClick={() => setUploadPDF(true)}>
              upload PDF
            </Button>
            <Button  onClick={() => setUploadText(true)}>
              upload text
            </Button>
          </ButtonContainer>
          <TextUpload open={uploadText} onClose={() => setUploadText(false)} getDocuments={getDocuments}/>
          <PDFUpload open={uploadPDF} onClose={() => setUploadPDF(false)} getDocuments={getDocuments}/>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default AddDocument;
