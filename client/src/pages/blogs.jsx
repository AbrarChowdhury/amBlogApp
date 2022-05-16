import {  Grid } from '@mui/material'
import BlogCard from '../components/blogCard/BlogCard'
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
function Blogs() {

  const [posts,setPosts]=useState(null)

  useEffect(() => {
    fetch("/api/post")
    .then(res=>res.json())
    .then(json=>setPosts(json.result))
    .catch(err=>console.log(err))
  }, [])
  
  return (
    <div>
      
      <Grid container  spacing={2} >
        {
          posts?.map( post=>(
            <Grid item xs={12} md={6}>
              <BlogCard {...post} key={post._id}/>
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