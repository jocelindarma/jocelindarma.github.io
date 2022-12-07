import "./BioDetails.css";

export const BioDetails = ({ bio, active }) => {
  return (
    bio.description.map((description, index) => (
      active ?
        <ul key={index} >
          <li className="gray-text">{description}</li>
        </ul> : null
    ))
  );
};
