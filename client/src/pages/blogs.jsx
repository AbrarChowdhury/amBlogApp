import {  Grid } from '@mui/material'
import BlogCard from '../components/blogCard/BlogCard'
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
function Blogs() {

  const [posts,setPosts]=useState(null)
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const handleChange = (searchInput, value) => {
    console.log(searchInput, value)
    setPage(value)
  }
  useEffect(() => {
    fetch(`/api/${page}`)
    .then(res=>res.json())
    .then(({result, pages})=>{
      setPosts(result)
      setTotalPage(pages)
    })
    .catch(err=>console.log(err))
  }, [page])
  
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
        <Pagination page={page} count={totalPage}  onChange={(event,value)=>handleChange(searchInput,value)} variant="outlined" color='primary' size='large'/>
      </div>
    </div>
  )
}

export default Blogs