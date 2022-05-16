import { Button, Modal,Box, TextField  } from '@mui/material'
import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  maxWidth: 600,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};
function formatted_date(d)
{
   var result="";
   result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() 
   return result;
}

function PostForm() {
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState({
      title:"",
      content:"",
      date:new Date().toISOString()
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPost(values => ({...values, [name]: value}))
  } 
  const handleSubmit = (e)=>{
      e.preventDefault()
      fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then(response => response.json())
      .then(json => {
        setPost({
          title:"",
          content:"",
          date:new Date().toISOString()
        })
        handleClose()
      })
      .catch(err=>console.log(err))

  }
  return (
    <>
    <Button onClick={handleOpen} variant="outlined" size="large" sx={ { borderRadius: 2 } }>add new post</Button>
    <Modal
    open={open}
    onClose={handleClose}
    >
        <Box sx={style}>
            <h2>Create a new post</h2>
            <p>{post.date}</p>
            <form onSubmit={handleSubmit}>
                <TextField label="Title" name="title" variant="outlined" fullWidth sx={{marginBottom:2}} onChange={handleChange} defaultValue={post.title}/>
                <TextField label="Content" name="content" variant="outlined" fullWidth multiline rows={4} sx={{marginBottom:2}} onChange={handleChange} defaultValue={post.content}/>
                <Button type="submit"  variant='outlined' sx={ { borderRadius: 2, float:"right" } }>Create New Post</Button>
                <Button  variant='outlined' sx={ { borderRadius: 2 } } color="error">Cancel</Button>
            </form>
            
        </Box>
    </Modal>
    </>
    )
}



export default PostForm