import "./BioDetails.css";
import { FaCarrot } from "react-icons/fa";

export const BioDetails = ({ bio, active }) => {
  return (
      bio.description.map((description) => (
        active ?
        <ul>
          <li className="gray-text"><FaCarrot/>{" "}{description}</li>
        </ul> : null
      ))
  );
};
