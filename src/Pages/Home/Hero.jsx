import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

export default function HeroSection() {
    return (
        <section id="hero" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p>Computer Science Student</p>
                    <h1 className="hero--section--title">
                        Hi, I'm <span className="hero--section--title--color">Amy!</span>{" "}
                    </h1>
                </div>
                <div className="hero--buttons">
                    <a href="https://linkedin.com/in/amy-fan-87580b256" target="blank">
                    <button type="button" className="btn hero--btn">LINKEDIN <FontAwesomeIcon icon={faLinkedin} /></button></a>

                    <a href="https://github.com/amyfan7" target="blank">
                    <button type="button" className="btn hero--btn">GITHUB <FontAwesomeIcon icon={faGithub} /></button></a>

                    <a href="./img/resume.pdf" target="blank">
                    <button type="button" className="btn hero--btn">RESUME <FontAwesomeIcon icon={faFile} /></button></a>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.jpg" alt="Hero Section" />
            </div>
        </section>
    );
}
