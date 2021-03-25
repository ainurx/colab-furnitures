import React, {useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Product(){
  useEffect(()=>{
    Aos.init({
      transition: 2000
    })
  })
  return(
    <Container>
      <div data-aos="fade-right">
        <h2 className="border-left text-primary">We also have the best <br/>product for you</h2>
        <p className="ml-28 lil-paragraph text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci tristique aliquet duis nibh tortor. Sed cursus morbi sagittis pulvinar sed aliquam ornare. Egestas arcu nec auctor molestie. Neque amet posuere.</p>
      </div>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <div className="product-wrapper" data-aos="fade-up">
            <img className="img-product" src="img/dining-room.png" alt="dining room"/>
            <div className="product-item">
              <h3 className="text-white">Dining Room</h3>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet massa et nunc sem eu eget pellentesque commodo nunc. Lacus justo facilisis potenti.</p>
            </div>
          </div>
          <div className="product-wrapper mt-32" data-aos="fade-up">
            <img className="img-product" src="img/meeting-room.png" alt="meeting room"/>
            <div className="product-item">
              <h3 className="text-white">Meeting Room</h3>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet massa et nunc sem eu eget pellentesque commodo nunc. Lacus justo facilisis potenti.</p>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="product-wrapper " data-aos="fade-up">
            <img className="img-product" src="img/family-room.png" alt="family room"/>
            <div className="product-item">
              <h3 className="text-white">Family Room</h3>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet massa et nunc sem eu eget pellentesque commodo nunc. Lacus justo facilisis potenti.</p>
            </div> 
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}