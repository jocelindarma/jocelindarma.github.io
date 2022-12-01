import "./BioDetails.css";
import { IoIosSnow } from "react-icons/io";

export const BioDetails = ({ bio, active }) => {
  return (
      bio.description.map((description) => (
        active ?
        <ul>
          <li className="gray-text"><IoIosSnow/>{" "}{description}</li>
        </ul> : null
      ))
  );
};
