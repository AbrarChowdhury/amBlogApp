import { Button, Modal,Box, TextField  } from '@mui/material'
import { useState, useContext } from 'react';
import { PostContext } from '../../context/postContext';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';


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


function PostForm() {
  const navigate = useNavigate()

  const { setPosts, setTotalPage } = useContext(PostContext)
  const [open, setOpen] = useState(false)
  const [post, setPost] = useState({ title:"",content:""})

  const resetForm = () => setPost({title:"",content:""})
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
      })
      .then(res=>res.json())
      .then(({result, pages})=>{
        console.log(result)
        console.log([...result])
        setPosts([...result])
        setTotalPage(pages)
        resetForm()
        handleClose()
        navigate("/")
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
            <p>{moment().format('DD/MM/YY')}</p>
            <form onSubmit={handleSubmit}>
                <TextField label="Title" name="title" variant="outlined" fullWidth sx={{marginBottom:2}} onChange={handleChange} defaultValue={post.title}/>
                <TextField label="Content" name="content" variant="outlined" fullWidth multiline rows={4} sx={{marginBottom:2}} onChange={handleChange} defaultValue={post.content}/>
                <Button type="submit"  variant='outlined' sx={ { borderRadius: 2, float:"right" } }>Create New Post</Button>
                <Button onClick={handleClose} variant='outlined' sx={ { borderRadius: 2 } } color="error">Cancel</Button>
            </form>
            
        </Box>
    </Modal>
    </>
    )
}



export default PostForm