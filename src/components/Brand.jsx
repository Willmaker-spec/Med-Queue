import { Link } from "react-router-dom";
import medQueueMark from "../assets/logo/medqueue-mark.svg";

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="MedQueue home">
      <span className="brand-mark">
        <img src={medQueueMark} alt="" aria-hidden="true" />
      </span>
      <span>Med<span>Queue</span></span>
    </Link>
  );
}

export default Brand;
