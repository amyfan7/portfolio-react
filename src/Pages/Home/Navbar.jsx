import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="navbar--logo">
                <img src="./img/logo.png" alt="Logo" />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav} >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link 
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duraction={500}
                        to="hero"
                        className="navbar--content"
                        >Home</Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duraction={500}
                        to="about"
                        className="navbar--content"
                        >About Me</Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duraction={500}
                        to="experience"
                        className="navbar--content"
                        >Experience</Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duraction={500}
                        to="projects"
                        className="navbar--content"
                        >Projects</Link>
                    </li>
                </ul>
            </div>
            <Link
            onClick={(e) => {
                e.preventDefault();
                closeMenu();
                window.location.href="mailto:amytfan@gmail.com"
            }}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duraction={500}
            className="btn btn-outline-primary"
            >Contact Me <FontAwesomeIcon icon={faEnvelope} /></Link>
        </nav>
    );
}

export default Navbar;