import React, { useState, useEffect } from "react";
import axios from "axios";

const Package = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get("http://localhost:5001/pack");
        console.log(response)
        setPackages(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching package data:", error);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h1>Packages</h1>
      <div style={styles.cardContainer}>
        {packages.map((pkg) => (
          <div key={pkg.package_id} style={styles.card}>
            <h2>{pkg.packName}</h2>
            <p>Price: ${pkg.price}</p>
            <p>Status: {pkg.status === 1 ? "Active" : "Inactive"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    width: "200px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Package;
