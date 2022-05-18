import { Fragment, useContext, useState } from 'react'
import { Button, Card, CardContent, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import { CommentContext } from "../../context/commentContext"

function CommentForm({parentId, hideForm}) {
    const {comments, setComments, triggerUpdate} = useContext(CommentContext)
    let params = useParams();
    const [comment, setComment] = useState({
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
      fetch(`/api/comment`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then(res => {
        setComment({  ...comment, userName:"", comment:""})
        triggerUpdate()
        parentId && hideForm()
        console.log()
      })
      .catch(err=>console.log(err))
    }
    
  return (
    <Fragment>
    {
    parentId?
      <CardContent>
        <form onSubmit={handleSubmit}>
            <TextField required placeholder="Name" name="userName" variant="outlined" size="small" fullWidth sx={{marginBottom:1, background:'white'}} onChange={handleChange} value={comment.userName}/>
            <TextField required placeholder="Comment" name="comment" variant="outlined" size="small" fullWidth sx={{marginBottom:1, background:'white'}} onChange={handleChange} value={comment.comment} multiline/>
            <Button type="submit" >Reply</Button>
        </form>
      </CardContent>
      :
      <Card sx={{margin:"20px 0"}}>
        <CardContent>
        <form onSubmit={handleSubmit}>
            <TextField required label="Name" name="userName" variant="outlined" fullWidth sx={{marginBottom:2}} onChange={handleChange} value={comment.userName}/>
            <TextField required label="Comment" name="comment" variant="outlined" fullWidth sx={{marginBottom:2}} onChange={handleChange} value={comment.comment} multiline rows={3}/>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
        </CardContent>
      </Card>
      }
    </Fragment>
    
    
  )
}


export default CommentForm