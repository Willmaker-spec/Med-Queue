import "./About.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      {/* ABOUT US HEAD */}
      <section className="about">
        <div className="about-us">
          <h1>Who We Are</h1>
          <p>
            Med-Queue is a website designed to help people/patients to find
            clinics and healthcare facilities more easily. We provide convenient
            online platform where patient can easily find and explore available
            healthcare options and, clinics that meet their needs and more
            informed decisions about where to seek medical atention.
          </p>
        </div>
      </section>
      {/* PURPOSE */}
      <section className="about-two">
        <div className="purpose">
          <h2>Our Purpose</h2>
          <p>
            The purpose of MedQueue is to simplify the process of finding
            suitable clinics and healthcare facilities. We aim to reduce the
            difficulty patients may experience when searching for medical
            services, especially when they are unfamiliar with available
            facilities in their area. Through MedQueue, users can find relevant
            clinic information, explore healthcare options, and identify where
            to seek appropriate medical attention. Our goal is to make
            healthcare discovery more accessible, improve convenience for
            patients, and help healthcare providers become easier to find
            online.
          </p>
        </div>
      </section>
      {/* OUR WORKS */}
      <section className="about-three">
        <div className="works">
          <h1>How Med Queue works</h1>
          <p>
            <ul>
              MedQueue is designed to make finding healthcare facilities
              straightforward. <br />
              1. Search for Clinics <br />
              Patients visit the MedQueue website and search for clinics based
              on their location, healthcare needs, or preferred facility. <br />
              2. Explore Available Options <br />
              Users browse relevant clinic listings and review the information
              available, such as clinic <br /> names, locations, contact
              details, opening hours, and services offered. <br />
              3. Choose a Suitable Clinic <br />
              Patients compare available options and select a clinic that best
              matches their needs and circumstances. <br />
              4. Contact or Visit the Clinic <br />
              Users can use the available contact information or directions to
              reach their preferred clinic. <br /> Where supported, they may
              also access appointment-booking or other clinic services through
              the website. 5. Access Healthcare with Greater Convenience <br />
              By making clinic information easier to find, MedQueue helps users
              take the next <br /> step towards obtaining the medical attention
              they need.
            </ul>
          </p>
        </div>
      </section>
      {/* Serves */}
      <section className="about-four">
        <div className="service">
          <h3>Who we serve</h3>
          <p>
            MedQueue is designed to serve individuals and organisations looking
            for a simpler way to connect with healthcare services. Patients and
            individuals: People searching for clinics that provide the
            healthcare services they need. Families and caregivers: People
            looking for suitable healthcare facilities for children, elderly
            relatives, or other family members. New residents and visitors:
            People who need help identifying clinics in an unfamiliar area. Busy
            professionals: Individuals who want to research healthcare options
            conveniently online. Clinics and healthcare providers: Medical
            facilities seeking greater online visibility and a way to help
            prospective patients discover their service
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
