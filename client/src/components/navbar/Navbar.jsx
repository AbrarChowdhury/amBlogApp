import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import am from '../../assets/amLogo.png'
import "./navbar.styles.scss"

function Navbar() {
  const navigate = useNavigate()
  return (
    <nav>
      <Stack spacing={2} direction="row" justifyContent="space-between" >
        <img src={am} alt="am" />
        <Button className='btn' variant="outlined" size="large" sx={ { borderRadius: 2 } }>add new post</Button>
      </Stack>
    </nav>
  )
}

export default Navbar