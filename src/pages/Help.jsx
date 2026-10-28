import { Link } from "react-router-dom";
import "./Help.css";

const faqs = [
  {
    question: "How do I find a nearby clinic?",
    answer:
      "Open the Clinics page to view available clinics. Browse the list, check the clinic details, and select a facility that suits your needs.",
  },
  {
    question: "How do I join a queue?",
    answer:
      "Select your preferred clinic, view its details, and follow the available instructions to join the queue. Provide the required information before confirming.",
  },
  {
    question: "Do I need an account to use MedQueue?",
    answer:
      "Some features may require you to create an account or log in. Follow the instructions on the platform to access the available services.",
  },
  {
    question: "Can I leave a queue after joining?",
    answer:
      "If the option is available, you can leave a queue through the relevant queue details or your dashboard. Check the displayed instructions before confirming your decision.",
  },
  {
    question: "Does MedQueue provide medical advice?",
    answer:
      "No. MedQueue helps users find clinics and manage queue information. It does not replace professional medical advice, diagnosis, or treatment.",
  },
  {
    question: "What should I do in a medical emergency?",
    answer:
      "Do not rely on MedQueue for emergency care. Contact your local emergency services or go to the nearest hospital emergency department immediately.",
  },
];

function Help() {
  return (
    <main className="help-page">
      <div className="help-container">
        <div className="help-heading">
          <p className="help-label">HELP CENTER</p>

          <h1>Frequently Asked Questions</h1>

          <p className="help-description">
            Find answers to common questions about using MedQueue.
          </p>
        </div>

        <section className="help-faq-list">
          {faqs.map((faq, index) => (
            <article className="help-faq-item" key={index}>
              <h2>{faq.question}</h2>

              <p>{faq.answer}</p>
            </article>
          ))}
        </section>

        <section className="still-need-help">
          <div className="still-need-help-text">
            <h2>Still Need Help?</h2>

            <p>
              Couldn't find the answer you were looking for? Reach out to our
              team for further assistance.
            </p>
          </div>

          <Link to="/contact" className="help-contact-button">
            Contact Us
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Help;