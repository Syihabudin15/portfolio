import { Card, Divider, Tag } from "antd";

export default function Courses(){
    return(
        <div style={{margin: '50 auto', padding: 20}}>
            <h3 style={{textAlign: 'center'}}>Courses</h3>
            <Divider/>
            <div className="courses-wrap">
                {courses.map((e,i) => (
                    <div className="card-item" key={i} data-aos="fade-up" data-aos-duration={e.dur}>
                        <div className="courses-items">
                            <div className="plat">Platform</div>
                            <div className="titik">:</div>
                            <div>{e.platform}</div>
                        </div>
                        <div className="courses-items">
                            <div className="plat">Name</div>
                            <div className="titik">:</div>
                            <div>{e.name}</div>
                        </div>
                        <div className="courses-items">
                            <div className="plat">Year</div>
                            <div className="titik">:</div>
                            <div>{e.year}</div>
                        </div>
                        <div className="courses-items">
                            <div className="plat">Certificate</div>
                            <div className="titik">:</div>
                            <div style={{color: e.cert ? "green" : "red"}}>{e.cert ? "Yes" : "No"}</div>
                        </div>
                        <div >
                            <div style={{display: 'flex'}}>
                                <div className="plat">Materials</div>
                                <div>:</div>
                            </div>
                            <div >
                                {e.materials.map((m,ind) => (
                                    <Tag color="blue" style={{zIndex: 0, fontStyle: 'italic', marginTop: 5, fontSize: 11}} key={ind}>{m}</Tag>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const courses = [
    {
        platform: "Enigma Camp",
        name: ".NET Developer",
        year: 2023,
        cert: true,
        dur: '1000',
        materials: ["Fundamental .NET", "Nuget", "OOP", "File Stream", "ADO .NET", "EF Core", "Sql Server", "Normalization", "ERD", "Repository Pattern", "ACID", "REST API", "ASP NET Core", "Unit Testing"]
    },
    {
        platform: "Course Net",
        name: "Node JS Engineer",
        year: 2022,
        cert: false,
        dur: '1500',
        materials: ["Fundamental Node JS", "NPM", "MVC", "OOP", "Todo List", "File Stream", "JSON", "Console App"]
    },
    {
        platform: "Cari Ilmu",
        name: "SEO dan Wordpress",
        year: 2022,
        cert: false,
        dur: '2000',
        materials: ["SEO", "SEM", "Tahapan SEO", "Adds", "Wordpress", "Security", "Self Keywords", "Branding", "Payment Gateaway", "Wordpress Plugin"]
    },
    {
        platform: "Baba Studio",
        name: "JQuery UI/UX",
        year: 2022,
        cert: false,
        dur: '2500',
        materials: ["Fundamental JQuery", "Keyboard Event", "Animate", "Animate on Scroll", "Form Validation", "Regex", "Ajax"]
    },
]