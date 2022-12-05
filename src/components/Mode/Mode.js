import "./Mode.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export const Mode = ({ setMode, handleModeChange }) => {
  return (
    <section className="mode-container">
      <button onClick={handleModeChange} className="icon-container">
        {setMode ? (
          <RiMoonFill className="mode-icon" />
        ) : (
          <RiSunFill className="mode-icon" />
        )}
      </button>
    </section>
  );
}
