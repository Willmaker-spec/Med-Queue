import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import Footer from "../components/Footer";

function ContactUs() {
  const [successMessage, setSuccessMessage] = useState("");
  // 1. Define the initial blank state for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // 2. Track changes as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // key assignment matching the input's "name" attribute
    }));
  };

  // 3. Handle data when the "SEND MESSAGE" button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    // Process form data here (e.g., API call to backend, Firebase, EmailJS, etc.)
    console.log("Submitted Form Data:", formData);

    setSuccessMessage(
      `Thank you ${formData.name}, your message has been sent successfully!`,
    );

    // Reset form inputs after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* HEADER */}
      <header className="page-header">
        <div className="header-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>Contact</span>
          </div>
          <h1>Contact Us</h1>
        </div>
      </header>

      {/* Main contact-section */}
      <section className="contact-section">
        <div className="section-heading">
          <span className="subtitle">Contact Us</span>
          <h2>Get In Touch With Our Hospital</h2>
          <p>
            We are here to help you. Contact our hospital for appointments,
            inquires, and other healthcare services.
          </p>
        </div>

        {/* Contact-cards */}
        <div className="contact-cards">
          <div className="contact-card dark-card">
            <h3>Our Location</h3>
            <p>Owerri, Nigeria</p>
          </div>

          <div className="contact-card">
            <h3>Cell Number</h3>
            <p>+234 0908765678</p>
          </div>

          <div className="contact-card dark-card">
            <h3>Email Us</h3>
            <p>info@medqueue.com</p>
          </div>

          <div className="contact-card">
            <h3>Working Hours</h3>
            <p>Mon - Sat: 8 AM - 5 PM</p>
          </div>
        </div>

        {/* Map and contact form */}
        <div className="contact-bottom">
          <div className="map-container">
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127083.59928309082!2d6.991149455906419!3d5.513096112305338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259980202a4a1%3A0x2b97fd8924660eb1!2sOwerri%2C%20Imo!5e0!3m2!1sen!2sng!4v1786011693845!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          <div className="form-container">
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </div>

    <Footer />;
  );
}


export default ContactUs;
