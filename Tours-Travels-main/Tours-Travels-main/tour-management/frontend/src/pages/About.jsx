import React from 'react';
import {Container,Col,Row} from 'reactstrap'

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import gallery6 from '../assets/images/gallery6.jpg'
import Subtitle from '../shared/Subtitle';
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <div>
      <section>
        <Container>
        <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Row>
                <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle subtitle={'Know about us'}/>
                            <img src={worldImg} alt=''/>
                        </div>
                        <h1> 
                        Discover the most unforgettable travel experiences with RouteHub
                         </h1>
                        <p>
                        At RouteHub, we specialize in crafting unforgettable travel experiences. Our dedicated team blends luxury and adventure to bring you the most captivating journeys. Embark on a voyage of discovery with us and explore the world's hidden gems.
                        </p> 
                    </div>
                </Col>

                <Col lg='2'>
                    <div className='hero__img-box'>
                        <img src={heroImg} alt=''/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-4'>
                        <video src={heroVideo} alt='' controls/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-5'>
                        <img src={heroImg02} alt=''/>
                    </div>
                </Col>
                
            </Row>

            <Row className='pt-5'>
                <h2 className='pt-5'>Our travel services are tailored to provide unparalleled comfort and convenience. From curated itineraries to immersive cultural experiences, we ensure every detail is meticulously planned for your ultimate satisfaction.</h2>
                <p className='pt-2'>At RouteHub, customer satisfaction is our top priority. Our experienced team is dedicated to delivering exceptional service, ensuring that every aspect of your journey is seamless, safe, and filled with inspiring moments..</p>
            </Row>
            <Row><img src={gallery6} alt='' style={{height:"500px",objectFit:"cover"}}/></Row>
            
        </Container>
       
      </section>
    </div>
  );
}

export default About;
