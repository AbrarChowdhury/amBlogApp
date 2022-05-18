import {Card, CardActionArea , CardContent, Fade, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";
import moment from 'moment'
function BlogCard({title, content, _id, createdAt}) {
  
  let navigate = useNavigate();
  
  return (
    <Fade in>
    <Card onClick={()=>navigate(`/blog/${_id}`)}>
      <CardActionArea sx={{minHeight:"200px"}}>
        <CardContent>
          <Typography variant="h2" component="div">
            {title}
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            { moment(createdAt).format('DD/MM/YY')}
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            {content.substring(0, 200)} {content.length >= 200 && '...'}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </Fade>
  )
}

export default BlogCard