import data from "../../data/index.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects () {
    return (
        <section className="projects--section" id="projects">
            <div className="projects--container-box">
                <div className="projects--container">
                    <h2 className="section--heading">Projects</h2>
                </div>
            </div>
            <div className="projects--section--container">
                {data?.projects?.map((item, index) => (
                    <div key={index} className="projects--section--card">
                        <div className="projects--section--img">
                            <img src={item.source} alt="img" />
                        </div>
                        <div className="projects--section--card--content">
                            <div>
                                <h3 className="projects--section--title">{item.title}</h3>
                                <p className="section--description">{item.description}</p>
                                <p className="section--skills">{item.skills}</p>
                            </div>
                            <a className="projects--link "href={item.link} target="blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/>View Github</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}