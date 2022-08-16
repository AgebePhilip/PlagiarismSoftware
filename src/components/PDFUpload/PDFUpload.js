import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Overlay,
  ModalContainer,
  HeaderText,
  FormContainer,
  Input,
  InputContainer,
  Close,
  ErrorMessage,
  Description,
  TextContent,
  Button,
} from "./PDFUpload.Style";
import axios from "axios";
import { Navigate } from "react-router-dom";

const schema = yup.object().shape({
  documentName: yup.string().required(),
  documentAuthor: yup.string().required(),
  content: yup.mixed().required("File is required"),
});

const PDFUpload = ({ open, onClose, getDocuments }) => {
  const [documentName, setDocumentName] = useState("");
  const [documentAuthor, setDocumentAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const format = "PDF";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postData = () => {
    axios.post(`https://6286d96de9494df61b2e3243.mockapi.io/DocumentsData`, {
      documentName,
      documentAuthor,
      description,
      content,
      format
    }).then(() => {
      getDocuments()
    })
  }

  const onSubmitHandler = () => {
    Navigate('documents')
    reset();
  };

  const sendRequest = () => {
    postData()
    onClose()
  }
  if (!open) return null;
  return (
    <>
      <Overlay className="overlay" onClick={onClose}>
        <ModalContainer
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Close onClick={onClose}> x </Close>
          <HeaderText>PDF Upload</HeaderText>
          <FormContainer className="form-container" onSubmit={handleSubmit(onSubmitHandler)}>
            <InputContainer className="input-container">
              <Input
                {...register("documentName")}
                placeholder="Document Name"
                type="text"
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
                required
              />
              <ErrorMessage>{errors.documentName?.message}</ErrorMessage>

              <Input
                {...register("documentAuthor")}
                placeholder="Document Author"
                type="text"
                value={documentAuthor}
                onChange={(e) => setDocumentAuthor(e.target.value)}
                required
              />
              <ErrorMessage>{errors.documentName?.message}</ErrorMessage>
            </InputContainer>

            <Description
              {...register("description")}
              placeholder="Document Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <ErrorMessage>{errors.documentName?.message}</ErrorMessage>

            <TextContent
              {...register("content")}
              placeholder="Type Your Content Here"
              type="file"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <ErrorMessage>{errors.documentName?.message}</ErrorMessage>

            <Button onClick={sendRequest}>upload</Button>
          </FormContainer>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default PDFUpload;
