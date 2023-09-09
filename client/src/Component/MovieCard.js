import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const MovieCard = (props) => {
const {data} = props
console.log(data)
  return (
    <div>
      <h3 style={{textAlign:'center'}}>Movie List</h3>
     
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'10px',}}>
     {data && data.map((movie) => { 
      return (
        <div>
      <Card sx={{ maxWidth: 345 }} key={movie.Title}>
      <CardMedia
        sx={{ height: 140 }}
        image={movie.Poster}
        title={movie.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{movie.Year}</Button>
        <Button size="small">{movie.Runtime}</Button>
      </CardActions>
    </Card>
    </div>
    )
     })} 
     </div>
     </div>
    
  )
}

export default MovieCard
