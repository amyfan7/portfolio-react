import HeroSection from "../Hero";
import Experience from "../Experience";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

export default function Home () {
    return (
        <>
            <HeroSection />
            <About />
            <Experience />
            <Projects />
            <Footer />
        </>
    )
}