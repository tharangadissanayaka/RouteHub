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
            At Travel, we are dedicated to creating unforgettable experiences. Our mission is to provide seamless and inspiring journeys that allow you to explore the world with ease and excitement. Whether you're seeking adventure, relaxation, or cultural exploration, our carefully curated packages cater to every traveler's dream. Discover new destinations, embrace unique cultures, and create memories that last a lifetime. Your journey begins with us.
            </div>

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
                Travel Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Travel Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tour Packages
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment Options
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
              PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Car Rentals
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Hostel World
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
              LAST MINUTE DEALS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London Specials
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                California Escapes
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Los Angeles Getaways
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Miami Vacations
              </li>
            </div>
           
            
          </div>

          <div className="footerDiv flex">
            <small>Your Gateway to Unforgettable Adventures</small>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;