import React from 'react';
import './privacyPolicy.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Effective Date: January 19, 2025</p>
      </div>
      <div className="privacy-content">
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to RoutreHub. Your privacy is important to us, and this Privacy Policy outlines how we
            collect, use, and safeguard your personal information.
          </p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal identification information (e.g., name, email address, phone number)</li>
            <li>Payment details for bookings</li>
            <li>Browser and device information</li>
          </ul>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To provide and manage our services</li>
            <li>To process bookings and payments</li>
            <li>To communicate with you regarding your bookings and updates</li>
            <li>To improve our website and customer experience</li>
          </ul>
        </section>
        <section>
          <h2>Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal information. However, we may share your data with trusted
            third parties to facilitate services such as payment processing and customer support.
          </p>
        </section>
        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, update, or delete your personal data</li>
            <li>Opt out of marketing communications</li>
            <li>Request details about how your data is being used</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> support@routrehub.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
