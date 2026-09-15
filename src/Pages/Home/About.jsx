export default function About() {
    return (
        <section id="about" className="about--section">
            <div className="about--section--img">
                <img src="./img/hero.jpg" alt="About me" />
            </div>
            <div className="hero--section--content--box">
                <div className="about--section--content">
                    <h1 className="section--heading">About Me</h1>
                    <p className="about--section--description">I&apos;m a senior Computer Science major at DePaul University passionate about building clean, user-friendly software. I&apos;m currently seeking a new grad developer role where I can apply my skills, grow as a developer, and contribute to meaningful projects. </p>
                    <p className="about--section--description"><span className="about--bold">Relevant coursework: </span>Data Structures, Computer Systems, Design and Analysis of Algorithms, Discrete Mathematics, Object-Oriented Software Development, Database Systems, Software Testing, Object-Oriented Enterprise Development, Distributed Systems, Program Language Concepts, Mobile App Dev for iOS</p>
                    <p className="about--section--description"><span className="about--bold">Programming Languages: </span>Java, Python, C, HTML, CSS, JavaScript, Swift</p>
                    <p className="about--section--description"><span className="about--bold">Technical Skills: </span>API Integration, Dependency Management (Maven), Object-Oriented Programming, Enterprise Development, Full-stack development, Software Testing, </p>
                </div>
            </div>
        </section>
    )
}