import React, { createContext, useContext, useState } from 'react'

const DocumentContext = createContext();

const DocumentProvider = ({children}) => {

    const [ documents, setDocuments] = useState([])

  return (
    <DocumentContext.Provider
        value={{ documents, setDocuments}} >
            {children}
    </DocumentContext.Provider>
  )
}

export const DocumentState = () => {
    return useContext(DocumentContext);
}

export default DocumentProvider;