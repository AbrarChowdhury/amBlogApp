
import React, { createContext, useState } from "react"


export const PostContext = createContext()
const PostContextProvider = (props) => {

  const [ posts, setPosts ] = useState(null)
  const [ page, setPage ] = useState(1);
  const [totalPage, setTotalPage] = useState(false);
  
  return (
    <PostContext.Provider value={{ posts, setPosts, page, setPage,totalPage, setTotalPage }}>
      {props.children}
    </PostContext.Provider>
  );

};

export default PostContextProvider;
