import images from "../../../Assets/"
const {Daniel, Yaa, Theophilus} = images;
const TeamMembers = [
    { name: 'Daniel Okyere', role: "Technical Lead", img_url: Daniel },
    { name: 'Yaa Amoakoah Frempong', role: "Team Lead", img_url: Yaa },
    { name: 'Theophilus Gyamo', role: "Business Lead", img_url: Theophilus }
]
function TeamImages() {
    return (
        <>
            <section className="members">
                <div className="container">
                    <div className="row">
                    {
                        TeamMembers.map(({name, role, img_url})=>(
                       <div className="col-md-6 col-lg-4" key={name}>
                            <div className="card text-center">
                                <img src={img_url} alt="Card image cap" className="card-img-top"/>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {name}
                                    </h4>
                                    <p className="card-text">{role}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                        <a href="" target="_blank" className="fa fa-facebook"></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" className="fa fa-twitter"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </>
    )
}
export default TeamImages