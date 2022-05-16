import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import am from '../../assets/amLogo.png'
import PostForm from '../blogCard/postForm/PostForm';
import "./navbar.styles.scss"

function Navbar() {
  const navigate = useNavigate()
  return (
    <nav>
      <Stack spacing={2} direction="row" justifyContent="space-between" >
        <img src={am} alt="am" onClick={()=>navigate("/")}/>
        <PostForm/>
      </Stack>
    </nav>
  )
}

export default Navbar