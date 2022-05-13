import { Grid } from '@mui/material'
import BlogCard from '../components/blogCard/BlogCard'
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
    </div>
  )
}

export default Blogs