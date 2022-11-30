import "./BioDetails.css";

export const BioDetails = (bio) => {
  return (
    <div className="container-bio-details">
      <span className="purple-text">{bio.title.cargo}</span>
      <p>Working with Figma and Adobe XD</p>
      <div className="details-items">
        <li>React Router</li>
        <li>Ui Design</li>
      </div>
    </div>
  );
};
