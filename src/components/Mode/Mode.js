import "./Mode.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux'
import { setMode } from "../../redux/reducer";

export const Mode = () => {
  const darkMode = useSelector(state => state.darkMode.darkMode)
  const dispatch = useDispatch()

  return (
    <section className="mode-container">
      <button onClick={() => dispatch(setMode(!darkMode))} className="icon-container">
        {darkMode ? (
          <RiMoonFill className="mode-icon" />
        ) : (
          <RiSunFill className="mode-icon" />
        )}
      </button>
    </section>
  );
}
