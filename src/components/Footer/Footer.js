import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="container-footer">
      <p> 
        <a href="mailto:jocelindarma13@gmail.com" target="_top"><span className="white-text">Email</span></a>{" "}
        <a href="https://github.com/jocelindarma" target="_blank" rel="noreferrer"><span className="white-text">Github</span></a>{" "}
        <a href="https://www.linkedin.com/in/jocelindarma/" target="_blank" rel="noreferrer"><span className="white-text">LinkedIn</span></a>{" "}
      </p>
      <p className="copyright"> 2022 Jocelin Darma </p>
    </footer>
  );
};
