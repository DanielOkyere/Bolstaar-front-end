import React from "react";
import { Container } from "react-bootstrap";
import TeamImages from "../components/rebuild/Team/Team"

function AboutUsScreen() {
    return (
        <Container>
            <div className="about-section bg-white p-3">
                <h1 className="display-1 text-center">About Us</h1>
                <p className="text-justify">
                    Bolstaar is Africa’s first easy-to-use farm technologies
                    aggregation platform. The platform allows smallholder
                    farmers to conveniently book, rent or buy farm technologies,
                    machineries and implements on demand
                    <br /> <br />
                    Our unique business model uses log-in, call-in and walk-in
                    options to manage interactions between farmers and
                    technology providers, and allows farmers to access
                    technologies using Bolstaar’s infrastructure. We support
                    sub-urban and rural agricultural infrastructure expansion,
                    and enhance technology adoption and farm mechanization
                </p>
            </div>
            <br></br>
            <br></br>
            <div className="content-box-lg">
                <Container>
                    <div className="row">
                        <div className="col-md-6">
                            <i className="fa fa-book"></i>
                            <h3>Mission</h3>
                            <hr></hr>
                            <p className="text-justify">
                                To provide a dependable and life time value for
                                smallholder farmers who are looking forward to
                                using technologies to achieve efficiency.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <i className="fa fa-book"></i>
                            <h3>Vision</h3>
                            <hr></hr>
                            <p className="text-justify">
                                To create Africa’s largest farm technologies
                                community and expand rural farm technology
                                adoption.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <br></br>
            <br></br>
          
            <div className="team-mates p-3">
                <h2 className="display-4 text-center">The Team</h2>
                <TeamImages/>
            </div>
        </Container>
    );
}

export default AboutUsScreen;
