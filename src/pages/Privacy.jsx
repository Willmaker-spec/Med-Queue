import { Link } from "react-router-dom";
import "./Privacy.css";


function Privacy() {
  return (
    <div className="privacy-page">
      <main className="privacy-container">

        {/* Privacy Introduction */}
        <section className="privacy-intro">
          <p className="privacy-label">YOUR PRIVACY MATTERS</p>

          <h1>Privacy Policy</h1>

          <p>
            At MedQueue, we understand the importance of your privacy when
            searching for healthcare services. This Privacy Policy explains
            how information may be collected, used, and handled when you
            use our platform to find nearby hospitals and clinics.
          </p>

          <p className="privacy-updated">
            Please read this policy to understand how your information
            may be handled when using MedQueue.
          </p>
        </section>

        {/* Privacy Policy Content */}
        <section className="privacy-content">

          <article className="privacy-section">
            <h2>1. About MedQueue</h2>

            <p>
              MedQueue is a healthcare-facility discovery platform designed to
              help people find hospitals and clinics near their location.
              Our goal is to make it easier for users to identify
              healthcare facilities and access information that can help
              them decide where to seek care.
            </p>

            <p>
              MedQueue helps users discover healthcare facilities. It does
              not replace professional medical advice, diagnosis, or
              emergency medical services.
            </p>
          </article>

          <article className="privacy-section">
            <h2>2. Information We May Collect</h2>

            <p>
              Depending on the features you use, MedQueue may process certain
              information to help you find nearby healthcare facilities.
              This may include:
            </p>

            <ul>
              <li>
                <strong>Location information:</strong> Your location, if
                you choose to share it, to help identify nearby hospitals
                and clinics.
              </li>

              <li>
                <strong>Search information:</strong> The locations,
                facility names, or other search details you enter.
              </li>

              <li>
                <strong>Account information:</strong> Details such as your
                name and email address, if account registration is
                available and you provide them.
              </li>

              <li>
                <strong>Communication information:</strong> Information
                you provide when contacting us for assistance or sending
                feedback.
              </li>

              <li>
                <strong>Technical information:</strong> Limited information
                about your device or browser, if collected by the services
                used to operate the platform.
              </li>
            </ul>

            <p>
              The information collected depends on the features MedQueue
              actually provides and how you choose to use them.
            </p>
          </article>

          <article className="privacy-section">
            <h2>3. How We Use Your Information</h2>

            <p>
              Information processed through MedQueue may be used to:
            </p>

            <ul>
              <li>Help you discover hospitals and clinics near you.</li>
              <li>Respond to location-based healthcare facility searches.</li>
              <li>Display relevant healthcare-facility information.</li>
              <li>Respond to questions, feedback, and support requests.</li>
              <li>Maintain and improve the platform.</li>
              <li>Help identify and resolve technical problems.</li>
            </ul>

            <p>
              We should only use information for purposes that are
              appropriate, lawful, and consistent with the features
              available on MedQueue.
            </p>
          </article>

          <article className="privacy-section">
            <h2>4. Location Privacy</h2>

            <p>
              Location can help MedQueue identify healthcare facilities
              near you. Where location access is supported, you may
              be asked for permission before your device shares your
              location.
            </p>

            <p>
              If you do not wish to share your device location, you may
              be able to search by entering a town, area, or other
              location manually, depending on the available features.
            </p>

            <p>
              How location information is accessed, stored, or retained
              depends on the implementation of the platform. MedQueue should
              clearly explain these practices based on how the service
              actually operates.
            </p>
          </article>

          <article className="privacy-section">
            <h2>5. Sharing of Information</h2>

            <p>
              MedQueue should not share personal information indiscriminately.
              Information may be disclosed when necessary to operate
              the service, comply with applicable legal obligations,
              or address other legitimate purposes permitted by law.
            </p>

            <p>
              Any sharing with third-party service providers should be
              consistent with the platform's actual practices and
              applicable privacy requirements.
            </p>
          </article>

          <article className="privacy-section">
            <h2>6. Data Security</h2>

            <p>
              Protecting users' information is important. Appropriate
              technical and organisational safeguards should be used
              to help protect information against unauthorised access,
              loss, alteration, or misuse.
            </p>

            <p>
              No online service can guarantee absolute security.
              The safeguards described in the final published policy
              should reflect the measures MedQueue has actually implemented.
            </p>
          </article>

          <article className="privacy-section">
            <h2>7. Third-Party Websites and Services</h2>

            <p>
              MedQueue may provide information or links that help users
              locate healthcare facilities or access related services.
              Some features may depend on external providers, such as
              mapping or location services, if integrated into the
              platform.
            </p>

            <p>
              When you use a third-party website or service, its own
              privacy policy and practices may apply. We encourage
              users to review those policies where appropriate.
            </p>
          </article>

          <article className="privacy-section">
            <h2>8. Your Privacy Rights</h2>

            <p>
              Depending on applicable law and the information involved,
              you may have the right to request access to your personal
              information, ask for inaccurate information to be corrected,
              or request deletion where applicable.
            </p>

            <p>
              You may also be able to manage location permissions through
              your device or browser settings.
            </p>

            <p>
              You can contact the MedQueue team with questions or requests
              concerning your personal information.
            </p>
          </article>

          <article className="privacy-section">
            <h2>9. Children's Privacy</h2>

            <p>
              MedQueue is intended to help people find healthcare facilities.
              If children may use the platform, their personal information
              should be handled in accordance with applicable laws and
              appropriate safeguards.
            </p>
          </article>

          <article className="privacy-section">
            <h2>10. Changes to This Privacy Policy</h2>

            <p>
              This Privacy Policy may be updated as MedQueue develops new
              features or changes how information is handled. Any
              published updates should accurately describe the platform's
              current practices.
            </p>

            <p>
              We encourage users to review this page periodically for
              relevant changes.
            </p>
          </article>

        </section>

        {/* Contact Us */}
        <section className="privacy-contact">
          <h2>Questions About Your Privacy?</h2>

          <p>
            If you have questions about this Privacy Policy or how your
            information is handled when using MedQueue, please reach out
            to our team or click the button to see our frequemtly asked questions and answers.
          </p>
          <Link to="/help" className="privacy-faq-button">FAQ</Link>

          {/* // <a href="/help" className="FAQ-contact-button">
          //   FAQ
          // </a> */}
        </section>

      </main>
    </div>
  );
}

export default Privacy;