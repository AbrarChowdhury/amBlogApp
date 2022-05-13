import {Card, CardActionArea , CardContent, Typography} from "@mui/material"

function BlogCard() {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            Lizard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BlogCard