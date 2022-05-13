import React from 'react'
import {Card, CardActionArea , CardContent, Typography} from "@mui/material"

function Blog() {
  const title ="Lorem Ipsum", content="Fugiat fugiat nisi proident aliqua occaecat Lorem nostrud ullamco officia sint laboris minim. Lorem dolore id aliqua veniam cupidatat ullamco aliquip do do velit eu officia occaecat. Ea elit laborum nisi non magna eu qui adipisicing duis. Enim Lorem nisi amet exercitation officia nostrud qui amet elit mollit non. Elit dolor aute nisi occaecat quis amet."
  return (
    <div>
      <Typography gutterBottom variant="h2" component="div">
        {title}
      </Typography>
      <Typography gutterBottom variant="body1" component="div">
        {content}
      </Typography>
    </div>
    
  )
}

export default Blog