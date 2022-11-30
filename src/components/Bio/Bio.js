// import ReactTooltip from "react-tooltip";
// import { BioDetails } from "../BioDetails/BioDetails";
import { BIO } from "../../constants/bio";
import "./Bio.css";

export const Bio = () => {
  return (
    <section className="container container-lines">
      <p className="purple-text">
        My Journey 
      </p>
      <div className="line"></div>
      {BIO.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.year}: </span>
          <span className="gray-text" data-tip="soo cuteeeee">
            {e.title}
          </span>
          {/* <ReactTooltip
            getContent={(dataTip) => `This little buddy is ${dataTip}`}
            place="top"
            effects="float"
            className="custom-theme"
          >
            <BioDetails bio = {e}/>{" "}
          </ReactTooltip> */}
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};
