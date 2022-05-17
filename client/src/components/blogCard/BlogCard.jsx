import {Card, CardActionArea , CardContent, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";
function BlogCard({title, content, date, _id}) {
  
  let navigate = useNavigate();
  return (
    <Card onClick={()=>navigate(`/blog/${_id}`)}>
      <CardActionArea sx={{minHeight:"200px"}}>
        <CardContent>
          <Typography variant="h2" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
        
            {content.substring(0, 200)} {content.length >= 200 && '...'}

          </Typography>
          <Typography variant="body1" gutterBottom>
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BlogCard