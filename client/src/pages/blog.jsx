import React, { useEffect, useState } from 'react'
import {Container, Divider, Typography} from "@mui/material"
import Comments from '../components/comments/Comments'
import {useParams} from "react-router-dom"
function Blog() {
  const [post,setPost]=useState(null)
  let params = useParams();
  useEffect(() => {
    fetch(`/api/post/${params.id}`)
    .then(res=>res.json())
    .then(json=>setPost(json.result))
    .catch(err=>console.log(err))
  }, [])
  console.log(params.id)
  return (
    <Container>
    <Divider style={{margin:"30px 0"}}/>
      <Typography gutterBottom variant="h2" component="div">
        {post?.title}
      </Typography>
      <Typography gutterBottom variant="body1" component="div">
        {post?.content}
      </Typography>
      <Comments postId={[params.id]}/>
    </Container>
    
  )
}

export default Blog