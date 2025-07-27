import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const CardInfo = (props) => {
  console.log(props.peliculas);
  const image= "https://image.tmdb.org/t/p/w500" + props.pelicula.poster_path
  
 return ( 
 <Card sx={{ maxWidth: 250
  }}>
      <CardMedia
        sx={{ height: 330 }}
        image= { image }
        title="pelicula image"
      />
      <CardContent>
        
        
      </CardContent>
      <CardActions>
        <Button size="small">+ Info</Button>
      </CardActions>
    </Card>

);
};
   
export default CardInfo;
