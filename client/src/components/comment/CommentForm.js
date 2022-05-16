import React, { Fragment } from 'react'
import { Button, Card, CardContent, TextField } from '@mui/material'
import {useParams} from 'react-router-dom'
function CommentForm({parentId}) {

    let params = useParams();
    const [comment, setComment] = React.useState({
      userName:"",
      comment:"",
      parentId:parentId||null,
      postId:params.id,
    })
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setComment(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(comment)
      fetch(`/api/comment`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then(response => setComment({
        userName:"",
        comment:"",
        parentId:parentId||null,
        postId:params.id,
      }))
      .catch(err=>console.log(err))
    }
    
  return (
    <Fragment>
    {
    parentId?
      <CardContent>
        <form onSubmit={handleSubmit}>
            <TextField placeholder="Name" name="userName" variant="outlined" size="small" fullWidth sx={{marginBottom:1, background:'white'}} onChange={handleChange} value={comment.userName}/>
            <TextField placeholder="Comment" name="comment" variant="outlined" size="small" fullWidth sx={{marginBottom:1, background:'white'}} onChange={handleChange} value={comment.comment} multiline/>
            <Button type="submit" >Reply</Button>
        </form>
      </CardContent>
      :
      <Card sx={{margin:"20px 0"}}>
        <CardContent>
        <form onSubmit={handleSubmit}>
            <TextField label="Name" name="userName" variant="outlined" fullWidth sx={{marginBottom:2}} onChange={handleChange} value={comment.userName}/>
            <TextField label="Comment" name="comment" variant="outlined" fullWidth sx={{marginBottom:2}} onChange={handleChange} value={comment.comment} multiline rows={3}/>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
        </CardContent>
      </Card>
      }
    </Fragment>
    
    
  )
}


export default CommentForm