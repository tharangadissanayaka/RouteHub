import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import Footer from "../components/Footer";
import './Packages.css';

const Package = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setError("");
        const response = await axios.get("http://localhost:5001/pack");
        setPackages(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching package data:", error);
        setError("Failed to load packages. Please try again.");
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleDetails = (packageId) => {
    navigate(`/packages/${packageId}`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading packages...</p>
      </div>
    );
  }

  return (
    <Layout>
      <div className="package-container">
        <h1>Packages</h1>
        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}
        <div className="card-container">
          {packages.map((pkg) => (
            <div key={pkg.package_id} className="card">
              <h2>{pkg.packName}</h2>
              <p><strong>Price:</strong> ${pkg.price}</p>
              <p><strong>Status:</strong> {pkg.status === 1 ? "Active" : "Inactive"}</p>
              <button className="details-button" onClick={() => handleDetails(pkg.package_id)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Package;
