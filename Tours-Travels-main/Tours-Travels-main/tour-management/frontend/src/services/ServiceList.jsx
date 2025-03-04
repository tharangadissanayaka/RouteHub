import React from 'react';
import ServiceCard from "./ServiceCard";
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    { 
        imgUrl:weatherImg,
        title:"Plan Your Trip Weather",
        desc: "Get accurate weather updates to plan your perfect trip."
    },
    { 
        imgUrl:guideImg,
        title:"Expert Local Guides",
        desc: "Find the best tour guides for an unforgettable journey."
    },
    { 
        imgUrl:customizationImg,
        title:"Customization",
        desc: "Personalized Travel Plans."
    }  
]
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item,index)=>(
        <Col lg="3" key={index}>
            <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default ServiceList;
