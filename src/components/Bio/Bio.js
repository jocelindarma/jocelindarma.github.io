import { BioItem } from "../BioItem/BioItem";
import { BIO } from "../../constants/bio";
import { useState } from "react";
import "./Bio.css";

export const Bio = () => {
  const [showDetails, setshowDetails] = useState("0");

  const handleToggle = (index) => {
    if (showDetails === index) {
      return setshowDetails("0");
    }
    setshowDetails(index);
  };

  return (
    <section className="container bio-container">
      <p className="purple-text"> My Journey </p>
      <div className="line"></div>
      {BIO.map((bio, index) => (
        <BioItem
          onToggle={() => handleToggle(index)}
          active={showDetails === index}
          key={index}
          bio={bio}
        />
      ))}
    </section>
  );
};