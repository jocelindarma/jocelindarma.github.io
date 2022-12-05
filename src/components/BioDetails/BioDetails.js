import "./BioDetails.css";

export const BioDetails = ({ bio, active }) => {
  return (
    bio.description.map((description) => (
      active ?
        <ul>
          <li className="gray-text">{description}</li>
        </ul> : null
    ))
  );
};
