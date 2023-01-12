import images from "../../../Assets/"
const {Daniel, Yaa, Theophilus, jalil, peter} = images;
const TeamMembers = [
    { name: 'Daniel Okyere', role: "Technical Officer", img_url: Daniel, email: 'd.okyere@bolstaar.com' },
    { name: 'Yaa Amoakoah Frempong', role: "Team Lead", img_url: Yaa, email:'y.frempong@bolstaar.com' },
    { name: 'Theophilus Gyamo', role: "Business Lead", img_url: Theophilus, email:'t.gyamo@bolstaar.com' },
    { name: 'Peter', role: "Operations", img_url:peter, email:'p.yiadom@bolstaar.com'},
    { name: 'Jalil', role: "Finance", img_url:jalil, email:'j.abdul@bolstaar.com'}
]
function TeamImages() {
    return (
        <>
            <section className="members">
                <div className="container">
                    <div className="row">
                    {
                        TeamMembers.map(({name, role, img_url, email})=>(
                       <div className="col-md-6 col-lg-4" key={name}>
                            <div className="card text-center">
                                <img src={img_url} alt="Card image cap" className="card-img-top card_image"/>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {name}
                                    </h4>
                                    <p className="card-text">{role}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                        <a href={`mailto:${email}`} target="_blank" className="fa fa-envelope"></a>
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