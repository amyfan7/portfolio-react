import data from "../../data/index.json";

export default function Experience() {
    return (
        <section className="exp--section" id="experience">
            <div className="exp--container">
                <h2 className="section--heading">Relevant Experience</h2>
            </div>
            <div className="exp--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="exp--section--card">
                        <div className="exp--section--img">
                            <img src={item.source} alt="" />
                        </div>
                        <div className="exp--section--card--content">
                            <h3 className="exp--section--title">{item.title}</h3>
                            <p className="exp--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}