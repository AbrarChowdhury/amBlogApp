import {Card, CardActionArea , CardContent, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";
function BlogCard({title, content, date, id}) {
  let navigate = useNavigate();
  return (
    <Card onClick={()=>navigate(`/blog/${id}`)}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h2" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body1" gutterBottom>
            09/01/2022
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BlogCard