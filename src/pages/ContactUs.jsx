import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* HEADER */}
      <header className="page-header">
        <div className="header-content">
          <div className="breadcrumb">
            <a href="/">Home</a>
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
            We are here to help you. Contact our hospital for
            appointments,inquires, and other healthcare servives.
          </p>
        </div>
        {/* Contact-cards */}
        <div className="contact-cards">
          <div className="contact-card dark-card">
            <i className="fa-solid fa-location-dot"></i>
            <h3>Our Location</h3>
            <p>Owerri, Nigeria</p>
          </div>

          <div className="contact-card">
            <i className="fa-solid fa-phone"></i>
            <h3>Cell Number</h3>
            <p>+234 0908765678</p>
          </div>

          <div className="contact-card dark card">
            <i className="fa-regular fa-envelop"></i>
            <h3>Email Us</h3>
            <p>info@medqueue.com</p>
          </div>
          <div className="contact-card">
            <i className="fa-regular fa-clock"></i>
            <h3>Working Hours</h3>
            <p>Mon - Sat: 8 AM - 5 PM</p>
          </div>
        </div>

        {/* map and contact form */}
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
            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you! Your message has been received.");
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                aria-label="Your Subject"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                required
              ></textarea>

              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
