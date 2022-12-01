// import ReactTooltip from "react-tooltip";
import { HiOutlineChevronDown, HiOutlineChevronUp} from "react-icons/hi"
import { BioDetails } from "../BioDetails/BioDetails";
import { BIO } from "../../constants/bio";
import { useState } from "react";
import "./Bio.css";

export const Bio = () => {
  const [showDetails, setShowDetails] = useState(false);

  const onClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="container container-lines">
      <p className="purple-text">
        My Journey 
      </p>
      <div className="line"></div>
      {BIO.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.year}: </span>
          <span className="gray-text" data-tip="title">
            {e.title}   
            { showDetails? <HiOutlineChevronUp className="chevron" onClick={onClick}/> : <HiOutlineChevronDown className="chevron" onClick={onClick}/> }
            { showDetails ? <BioDetails e={e} /> : null }
          </span>
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};