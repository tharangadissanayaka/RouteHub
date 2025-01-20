import React from "react";
import "./home.css";
import Layout from "../components/Layout";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="content">
          <HeroSection />
        </div>
          <Footer />
      </div>
    </Layout>
  );
};

export default Home;
