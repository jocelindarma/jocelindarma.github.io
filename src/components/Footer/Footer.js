import "./Footer.css";
import {FaGithub, FaLinkedin, FaGoogle} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="container-footer">
      <p> 
        <a href="mailto:jocelindarma13@gmail.com" target="_top"><span className="white-text contact"><FaGoogle/></span></a>{" "}
        <a href="https://github.com/jocelindarma" target="_blank" rel="noreferrer"><span className="white-text contact"><FaGithub/></span></a>{" "}
        <a href="https://www.linkedin.com/in/jocelindarma/" target="_blank" rel="noreferrer"><span className="white-text contact"><FaLinkedin/></span></a>{" "}
      </p>
      <p className="copyright"> 2022 Jocelin Darma </p>
    </footer>
  );
};
