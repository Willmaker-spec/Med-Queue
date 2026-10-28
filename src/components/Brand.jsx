import { Link } from "react-router-dom";

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="MedQueue home">
      <span className="brand-mark">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 27s-10-5.8-10-13a5.8 5.8 0 0 1 10-3.9A5.8 5.8 0 0 1 26 14c0 7.2-10 13-10 13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M7 16h5l2-4 3.4 8 2.1-4H25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>Med<span>Queue</span></span>
    </Link>
  );
}

export default Brand;
