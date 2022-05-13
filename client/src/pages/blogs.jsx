import { Grid } from '@mui/material'
import BlogCard from '../components/blogCard/BlogCard'
import Pagination from '@mui/material/Pagination';
function Blogs() {
  return (
    <div>
      <Grid container  spacing={2} >
        {
          [1,2,3,4,5,6,7,8].map(e=>(
            <Grid item xs={12} md={6}>
              <BlogCard id={"abc"}/>
            </Grid>
            )
          )
        }
      </Grid>
      <div style={{display:"flex", justifyContent:"center", padding:"20px"}}>
        <Pagination  count={10} variant="outlined" color='primary' size='large'/>
      </div>
    </div>
  )
}

export default Blogs