import data from "../../data/index.json";

export default function Experience() {
    return (
        <section className="exp--section" id="experience">
            <div>
                <h2 className="section--heading">Relevant Experience</h2>
            </div>
            <div className="exp--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="exp--section--card">
                        <div className="exp--section--img">
                            <img src={item.source} alt="" />
                        </div>
                        <div className="exp--section--card--content">
                            <h3 className="projects--section--title">{item.title}</h3>
                            <p className="section--dates">{item.dates}</p>
                            <p className="section--description">{item.description}</p>
                            <p className="section--skills">{item.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}