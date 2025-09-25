import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="hero"
                className="text-md"
                >Home</Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
                className="text-md"
                >About Me</Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="experience"
                className="text-md"
                >Experience</Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
                className="text-md"
                >Projects</Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a 
              href="https://linkedin.com/in/amy-fan-87580b256"
              className="navbar--content"
              target="blank">
                <FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li>
              <a 
              href="https://github.com/amyfan7"
              className="navbar--content"
              target="blank">
                <FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <li>
              <a 
              href="./img/resume.pdf"
              className="navbar--content"
              target="blank">
                <FontAwesomeIcon icon={faFile} /></a>
            </li>
            <li>
              <a 
              href="mailto:amytfan@gmail.com"
              className="navbar--content"
              target="blank">
                <FontAwesomeIcon icon={faEnvelope} /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;