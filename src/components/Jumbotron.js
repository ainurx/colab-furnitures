import React, {useEffect} from 'react'
import Container from '@material-ui/core/Container';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

export default function Jumbotron(){
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return(
    <Container className="jumbotron-wrapper" data-aos="fade-up">  
      <img className="jumbotron-img" src="img/img-jumbotron.png"/>
      <div className="center-item">
        <h1>Evolution In Minimalist <br/> Furniture At Home.</h1>
        <form className="input-search" action="#">
          <div className="input-group">
            <img src="icon/search.png"/>
            <input type="text" placeholder="Find your favorite furniture"/>
            <button className="btn-search"><b>Search</b></button>
          </div>
        </form>
      </div>
    </Container>
  )
}