import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Footer from "../Components/Footer";
import "./Register.css";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      console.log("Submitting form with values:", values); // Debugging log
      const response = await axios.post(
        "http://localhost:3003/auth/register",
        values
      );
      console.log("Response from server:", response.data);

      if (response.data.success) {
        setSuccess("User registered successfully!");
        // Optionally, redirect to login page after a delay
        // setTimeout(() => { window.location.href = "/login"; }, 2000);
      } else {
        setError(response.data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("Error from server:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <Layout>
    <div>
      <div className="signup-container">
        <div className="signup-box">
          
          <div className="signup-right">
          <h2 className="signup-title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              {/* Display Success Message */}
              {success && (
                <div className="success-message">
                  {success}
                </div>
              )}
              {/* Display Error Message */}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="form-input"
                  required
                  name="name"
                  value={values.name}
                  onChange={handleChanges}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <div className="flex">
                  <select className="form-select">
                    <option value="+94">🇱🇰 +94</option>
                  </select>
                  <input
                    type="text"
                    id="mobile"
                    placeholder="Mobile"
                    className="form-input"
                    required
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChanges}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-input"
                  required
                  name="email"
                  value={values.email}
                  onChange={handleChanges}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-input"
                  required
                  name="password"
                  value={values.password}
                  onChange={handleChanges}
                />
                <span className="password-toggle" onClick={() => {
                  const passwordInput = document.getElementById("password");
                  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
                }}>
                  👁
                </span>
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="terms-checkbox"
                  required
                />
                <label htmlFor="terms" className="terms-label">
                  I agree to the{" "}
                  <a href="#terms" className="terms-link">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <button type="submit" className="submit-button">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </Layout>
  );
};

export default Register;