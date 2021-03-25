import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: '24px',
  },
  media: {
    height: 240,
    borderRadius: '8px',
  },
});

export default function Furniture(){
  const classes = useStyles()

  useEffect(()=>{
    Aos.init({
      transition: 2000
    })
  })

  return(
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6} data-aos="fade-right">
          <h2 className="border-left text-primary">There are many choices of <br/>furniture for you</h2>
          <p className="ml-28 lil-paragraph text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci tristique aliquet duis nibh tortor. Sed cursus morbi sagittis pulvinar sed aliquam ornare. Egestas arcu nec auctor molestie. Neque amet posuere.</p>
        </Grid>
        <Grid item md={6}>
          <div className="float-right">
            <button className="btn-prev-next">&#8592;</button>
            <button className="btn-prev-next">&#8594;</button>
          </div>
        </Grid>
      </Grid>
      <Card data-aos="fade-up" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="img/img-card-1.png"
            title="furniture"
          />
            <Typography className="mt-18 text-primary" gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography className="text-primary" variant="body2" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
        </CardActionArea>
        <CardActions>
          <button className="btn-cancel">
            Details
          </button>
          <button className="btn-buy">
            Buy
          </button>
        </CardActions>
      </Card>
    </Container>
  )
}