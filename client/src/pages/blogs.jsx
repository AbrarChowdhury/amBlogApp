import {  Grid, LinearProgress  } from '@mui/material'
import BlogCard from '../components/blogCard/BlogCard'
import Pagination from '@mui/material/Pagination';
import { useEffect, useState, useContext } from 'react';
import {PostContext} from "../context/postContext"

function Blogs() {
  const { posts, setPosts, page, setPage, totalPage, setTotalPage } = useContext(PostContext);
  const [isFetching, setFetching] = useState(true)
  const handleChange = (value) => {
    setPage(value)
  }
  useEffect(() => {
    setFetching(true)
    fetch(`/api/${page}`)
    .then(res=>res.json())
    .then(({result, pages})=>{
      setPosts(result)
      setTotalPage(pages)
      setFetching(false)
    })
    .catch(err=>console.log(err))
  }, [page])
  
  return (
    <div>
      <Grid container  spacing={2} >
        {
          posts?.map( post=>(
            <Grid item xs={12} md={6} key={post._id}>
              <BlogCard {...post} key={post._id}/>
            </Grid>
            )
          )
        }
      </Grid>

      {isFetching && <LinearProgress sx={{marginTop:"20px"}}/>}
      <div style={{display:"flex", justifyContent:"center", padding:"20px 0"}}>
        {totalPage&&
          <Pagination 
            siblingCount={0} 
            boundaryCount={2}
            sx={{marginTop:isFetching?"-24px":"0px"}} 
            page={page} 
            count={totalPage}  
            onChange={(event,value)=>handleChange(value)} 
            variant="outlined" 
            color='primary' 
            />}
      </div>
    </div>
  )
}

export default Blogs