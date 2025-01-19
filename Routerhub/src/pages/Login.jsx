import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Footer from "../Components/Footer";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const parseJwt = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      console.log("Submitting login with values:", values); // Debugging log
      const response = await axios.post(
        "http://localhost:3003/auth/login",
        values
      );
      console.log("Response from server:", response.data);

      // 2) Get token from response
      const { token } = response.data;

      // 3) Store token in localStorage
      localStorage.setItem("token", token);

      // 4) Decode token to check role
      const decoded = parseJwt(token);
      const userRole = decoded?.role;

      if (userRole === "admin") {
        navigate("/car"); // Admin route
      } else {
        navigate("/dashboard"); // User route
      }
    } catch (err) {
      setLoading(false);
      console.error("Error from server:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
        navigate("/login");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <Layout>
      <div>
        <div className="login-container">
          <div className="login-box">
            {/* Left Section */}
            

            {/* Right Section */}
            <div className="login-right">
              <h2 className="mobile-title">Login!</h2>
              <form onSubmit={handleSubmit}>
                {/* Display Success Message */}
                {success && <div className="success-message">{success}</div>}

                {/* Display Error Message */}
                {error && <div className="error-message">{error}</div>}

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
                  <span
                    className="password-toggle"
                    onClick={() => {
                      const passwordInput = document.getElementById("password");
                      passwordInput.type =
                        passwordInput.type === "password" ? "text" : "password";
                    }}
                    style={{ cursor: "pointer", position: "absolute", right: "10px", top: "35px" }}
                  >
                    👁
                  </span>
                </div>

                <button type="submit" className="submit-button">
                  LOGIN
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

export default Login;
