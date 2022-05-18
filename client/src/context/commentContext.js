import React, { createContext, useState } from "react"

export const CommentContext = createContext()
const CommentContextProvider = (props) => {

  const [ comments, setComments ] = useState()
  const [ isUpdated, setUpdate ] = useState()
  const triggerUpdate = () => setUpdate(!isUpdated)
  
  return (
    <CommentContext.Provider value={{ comments, setComments, isUpdated, triggerUpdate }}>
      {props.children}
    </CommentContext.Provider>
  );

};

export default CommentContextProvider;
