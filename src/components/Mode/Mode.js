import "./Mode.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export default function Mode({ setMode, handleModeChange }) {
  return (
    <section className="container-mode">
      <button onClick={handleModeChange} className="container-icon">
        {setMode ? (
          <RiMoonFill className="mode-icon" />
        ) : (
          <RiSunFill className="mode-icon" />
        )}
      </button>
    </section>
  );
}
