import "./Testimonial.css";
import Pics from "../assets/images/images.jpg";
import image from "../assets/images/images 2.jpg";
import img from "../assets/images/images 3.jpg";
import cardimg from "../assets/images/images 4.jpg";
import carding from "../assets/images/images 5.jpg";
const Testimonial = () => {
  return (
    <div>
      <section className="testimonials">
        <h4>TESTIMONIES </h4>
        <h3>
          At MedQueue, we believe that finding the right clinic should be a
          simple, convenient, and reassuring experience. Our platform is
          designed to help patients discover healthcare facilities, explore
          available services, and make informed decisions about where to seek
          medical attention. Our users' experiences help us understand what
          matters most when people search for healthcare. This page is dedicated
          to sharing their feedback, experiences, and suggestions as we continue
          working towards making healthcare discovery easier for everyone.
        </h3>
        <h2>What Our Users Say About MedQueue</h2>
        <div className="Testimonial-container">
          <div className="card">
            <img src={Pics} alt="picture" />
            <p>
              "I like the idea of having clinic information available in one
              place. <br />
              Instead of searching through different sources, I can use MedQueue
              to explore <br />
              healthcare options that may suit my needs." — Sample User Feedback
            </p>
          </div>
          <div className="card">
            <img src={image} alt="picture" />
            <p>
              "MedQueue provides a convenient way to explore clinics and find
              information about healthcare facilities. <br />
              It makes the search process easier and helps me understand my
              options before deciding where to go." — Sample Patient Feedback
            </p>
          </div>
          <div className="card">
            <img src={img} alt="picture" />
            <p>
              "When looking for healthcare for my family, having access to
              information about different clinics is helpful. <br />
              MedQueue offers a practical starting point for finding suitable
              healthcare facilities." — Sample Caregiver Feedback
            </p>
          </div>
          <div className="card">
            <img src={cardimg} alt="picture" />
            <p>
              "I appreciate the idea behind Med-Queue. It provides a practical
              starting point <br />
              for people looking for clinics and helps make the search for
              healthcare facilities more straightforward"
            </p>
          </div>
          <div className="card">
            <img src={carding} alt="picture" />
            <p>
              "I like the idea of having clinic information available in one
              place. <br />
              Instead of searching through different sources, I can use MedQueue
              to explore <br />
              healthcare options that may suit my needs." — Sample User Feedback
            </p>
          </div>
        </div>

        <div className="testimonial-text">
          <h1>Share Your MedQueue Experience</h1>
          <p>
            Have you used MedQueue to find a clinic? We would love to hear about
            your experience. Your feedback can help us understand what works
            well, identify areas for improvement, and make the platform more
            useful for other people searching for healthcare facilities. Share
            your experience and help us improve healthcare discovery for
            everyone.
          </p>
          <button>Submit Your Testimonial</button>
          <h3>Why Your Feedback Matters</h3>
          <p>
            Builds trust: Genuine experiences help other users understand how
            MedQueue works.
          </p>
          <p>
            Improves our platform: Your suggestions help us identify
            opportunities to make the website better.
          </p>
          <p>
            Supports informed decisions: Relevant feedback can help users
            navigate their search for healthcare facilities.
          </p>
          <p>
            Strengthens our community: Every contribution helps us understand
            the needs of patients, caregivers, and healthcare providers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
