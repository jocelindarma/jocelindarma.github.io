import "./About.css";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import resume from "../../assets/Jocelin Darma Resume.pdf";

export const About = () => {
  return (
    <section id="about" className="container about-container">
      <div className="about-section">
        <span className="purple-text">
          About Me {" "}
        </span>
        <p className="gray-text">
          I am a Full Stack Developer and DevOps Enthusiast. I was born and raised in
          Jakarta, Indonesia, currently based in Seattle, Washington. My current work
          experience includes building scalable and reliable web applications, slackbots,
          microservices, as well as automating and supporting to ensure CI/CD in product
          development. I am a good communicator and self-motivator, able to work as part of a team
          but also under my own initiative. I am currently open to work so feel free to contact
          me via <a href="mailto:jocelindarma13@gmail.com" target="_top">email </a>
          or <a href="https://www.linkedin.com/in/jocelindarma/" target="_blank" rel="noreferrer">LinkedIn</a>! {" "}
        </p>
        <span className="resume">
          <a href={resume} target="_blank" rel="noreferrer">Download My Resume</a>
        </span>
      </div>
      <ImageCarousel />
    </section>
  );
};