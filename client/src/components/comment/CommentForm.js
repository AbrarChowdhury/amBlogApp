import React from 'react'
import { Button, Card, CardContent, TextField } from '@mui/material'
function CommentForm({postId,parentId}) {
    const [comment, setComment] = React.useState({
      userName:"",
      comment:"",
      parentId:parentId||null,
      postId:postId
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
      }).then(response => response.json())
      .then(json => console.log("got this back",json))
      .catch(err=>console.log(err))
    }
    
  return (
    <Card>
        <CardContent>
        <form onSubmit={handleSubmit}>
            <TextField label="Name" name="userName" variant="outlined" fullWidth sx={{marginBottom:2}} onChange={handleChange} defaultValue={comment.userName}/>
            <TextField label="Comment" name="comment" variant="outlined" fullWidth sx={{marginBottom:2}} onChange={handleChange} defaultValue={comment.comment} multiline rows={3}/>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
        </CardContent>
    </Card>
  )
}


export default CommentForm