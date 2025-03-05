import React,{useEffect} from 'react';
import './footer.css' 
import tour from '../../assets/images/tour.jpg';

import {FiChevronRight, FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:3000})
  } ,[])


const click =()=>{

  const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
      const message = `Error : ${res.status}`;
      throw new Error(message);
    }
    const data = await res.json();
    return data;
  };

  const sendData = () => {
      makeRequest("http://192.168.0.225:3000/addPackages", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    
    sendData();
    
    //const getData = () => {
      //makeRequest("127.0.0.1:3000")
        //.then((res) => console.log(res))
        //.catch((err) => console.log(err));
   // };
    
    //getData();
}


  return (
    <section className='footer mb-0'>
      <div className='videoDiv'>
        <img src={tour} alt=''/>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
            <button onClick={click} data-aos="fade-up" className='btnm flex' type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className="footerIntro flex">
            <div className="logiDiv">
            <Link to='/' className='logo flex'>
            
              
                <MdOutlineTravelExplore className="icon"/>
                Travel
              </Link>
            </div>

            <div data-aos="fade-up" className='footerParagraph'>
            At RouteHub, we are dedicated to crafting unforgettable journeys across the tropical paradise of Sri Lanka. Our mission is to provide seamless and inspiring travel experiences, allowing you to discover the island’s breathtaking landscapes, rich heritage, and warm hospitality with ease and excitement.

Whether you're seeking adventure, relaxation, wildlife encounters, or cultural exploration, our carefully curated packages cater to every traveler’s dream.

🏝️ Discover new destinations, embrace unique cultures, and create memories that last a lifetime. Your Sri Lankan adventure begins here with RouteHub!            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>

            </div>
          </div>

          <div  className="footerLinks grid">
            
            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
              OUR SERVICES
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Sri Lanka Travel Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tour Packages & Guided Tours
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Wildlife & Adventure Tours
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Cultural & Heritage Excursions
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
              PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Car Rentals & Private Transport
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Luxury Hotels & Eco Lodges
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Sri Lanka Hotels & Resorts
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Sri Lanka Travel Reviews
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
              LAST MINUTE DEALS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Ella & Hill Country Getaways
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Mirissa & Unawatuna Beach Retreats              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Kandy & Cultural Triangle Tours

              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Yala & Wilpattu Wildlife Safaris
              </li>
            </div>
           
            
          </div>

          <div className="footerDiv flex">
            <small>Your Gateway to Sri Lanka’s Best Experiences
            </small>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;