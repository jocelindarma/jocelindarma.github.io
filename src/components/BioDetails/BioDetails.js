import "./BioDetails.css";

export const BioDetails = ({ e }) => {
  return (
      e.description.map((description) => (
        <ul>
          <li className="gray-text">{description}</li>
        </ul>
      ))
  );
};
