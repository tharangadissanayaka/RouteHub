import React from 'react';
import Layout from '../components/Layout';
import './about.css';
import Footer from "../Components/Footer";


const AboutPage = () => {
  return (
    <Layout>
    <div className="about-container">
      <div className="about-hero">
        <h1>About RoutreHub</h1>
        <p>Your trusted partner for hotel booking and travel management in Sri Lanka.</p>
      </div>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          At RoutreHub, we strive to simplify your travel experience by offering seamless hotel booking
          and travel planning services. We connect you with the best destinations and accommodations to
          ensure a memorable journey.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide range of hotels and travel packages tailored for you</li>
          <li>Secure and fast booking process</li>
          <li>24/7 customer support to assist your needs</li>
        </ul>
        <h2>Explore Sri Lanka</h2>
        <p>
          From breathtaking beaches to lush tea plantations, Sri Lanka offers a paradise waiting to be
          explored. RoutreHub is here to make your journey unforgettable.
        </p>
      </div>
    </div>
    <Footer/>
    </Layout>
  );
};

export default AboutPage;

