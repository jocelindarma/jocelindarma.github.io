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
          I am a Full Stack Developer and DevOps Enthusiast. I am currently based in Jakarta, Indonesia.
          My work experience includes building scalable and reliable web applications, slackbots,
          microservices, as well as automating and supporting to ensure CI/CD in product
          development. I am a good communicator and self-motivator, able to work as part of a team
          but also under my own initiative. I am currently open to work so feel free to contact
          me via <a href="mailto:jocelindarma13@gmail.com" target="_top">email </a>
          or <a href="https://www.linkedin.com/in/jocelindarma/" target="_blank" rel="noreferrer">LinkedIn</a>! {" "}
          You can also check some of my work on my <a href="https://github.com/jocelindarma" target="_blank" rel="noreferrer">GitHub</a>! 
        </p>
        <br></br>
        <p className="gray-text">
          Here are a few technologies I've been working with: 
          <ul className="tech-stack">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
          </ul>
        </p>
        <br></br>
        <span className="resume">
          <a href={resume} target="_blank" rel="noreferrer">Download My Resume</a>
        </span>
      </div>
      <ImageCarousel />
    </section>
  );
};