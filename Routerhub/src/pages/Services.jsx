import React from 'react';
import Layout from '../components/Layout';
import './services.css';

import Footer from "../Components/Footer";



const ServicesPage = () => {
  return (
    <Layout>
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Discover the wide range of services we offer to make your travel experience seamless and memorable.</p>
      </div>
      <div className="services-list">
        <div className="service-item">
          <h2>Hotel Booking</h2>
          <p>Find and book the best hotels at affordable prices, tailored to your preferences.</p>
        </div>
        <div className="service-item">
          <h2>Travel Management</h2>
          <p>Plan your trips effortlessly with our comprehensive travel management solutions.</p>
        </div>
        <div className="service-item">
          <h2>Custom Tour Packages</h2>
          <p>Create personalized tour packages that fit your needs and explore Sri Lanka like never before.</p>
        </div>
        <div className="service-item">
          <h2>24/7 Customer Support</h2>
          <p>Our dedicated team is always available to assist you, ensuring a stress-free experience.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </Layout>
  );
};

export default ServicesPage;
