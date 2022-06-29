import React from "react";
import LogoBolstaar from "../Assets/Images/LogoBolstaar.jpg";
import farmerImg from "../Assets/Images/farmer2.jpg";
import { Container } from "react-bootstrap";
import { TiGroup } from "react-icons/ti";

function AboutUsScreen() {
    return (
        <Container>
            <div className="about-section bg-white p-3">
                <h1 className="display-1 text-center">About Us</h1>
                <p className="text-justify">
                    Bolstaar is an agricultural technology integration platform
                    that enables smallholder farmers to access workable
                    technologies and techniques to scale-up and make substantial
                    profit. The platform also provides supply chain information
                    and links farmers to superior markets. Our platform is
                    created with the desire to solve smallholder farmers’ three
                    biggest problems: Lack of access to quality farm resources,
                    goods low in quality and quantity, and market access. We
                    make high quality agricultural technologies and innovative
                    agritech solutions a click or call away from the farmer.
                    <br /> <br />
                    Our model is designed to partner and collaborate with time
                    tested Agtech Businesses, Agricultural technology providers
                    and Research Institutes with many years of experience to
                    support farmers in achieving efficiency on the field. Our
                    constant engagements with the farmers enable us to
                    understand the demands coming from the field and, thus,
                    bring concrete solutions. On the other hand, we use data to
                    forecast the demands in superior markets and provide supply
                    chain information to help the farmer plan to meet the
                    demand. The farmer is then given access to all the inputs,
                    farm technologies and techniques they need to achieve the
                    requirements of the market.
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
                                To create Africa’s largest farm logistics
                                community and expand rural farm technology
                                adoption
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <br></br>
            <br></br>
            <div className="team-mates p-3">
                <h2 className="display-4 text-center">The Team</h2>
                <div
                    style={{ backgroundColor: "#F9F8F3" }}
                    className="flex-1  h-[38rem] mb-14  mt-8  flex flex-col md:flex-row md:justify-center items-center gap-4 "
                >
                    <div className="flex flex-col w-[22rem] h-[26rem] bg-white relative border-2 shadow-lg ">
                        <img
                            src={farmerImg}
                            className="h-1/2 object-cover "
                            alt=""
                        />
                        <div className="h-24 absolute bottom-36  w-24 self-center  rounded-full bg-white flex justify-center items-center   ">
                            <TiGroup
                                size={30}
                                className="text-black fill-current"
                            />
                        </div>
                        <h1 className="tracking-wide leading-14 mt-[3rem] text-center z-20">
                            Daniel Okyere (Tech lead)
                        </h1>
                    </div>
                    <div className="flex flex-col w-[22rem] h-[26rem] bg-white relative border-2 shadow-lg ">
                        <img
                            src={farmerImg}
                            className="h-1/2 object-cover "
                            alt=""
                        />
                        <div className="h-24 absolute bottom-36  w-24 self-center  rounded-full bg-white flex justify-center items-center   ">
                            <TiGroup
                                size={30}
                                className="text-black fill-current"
                            />
                        </div>
                        <h1 className="tracking-wide leading-14 mt-[3rem] text-center z-20">
                            Yaa Amoakoa (Team leader)
                        </h1>
                    </div>
                    <div className="flex flex-col w-[22rem] h-[26rem] bg-white relative border-2 shadow-lg ">
                        <img
                            src={farmerImg}
                            className="h-1/2 object-cover "
                            alt=""
                        />
                        <div className="h-24 absolute bottom-36  w-24 self-center  rounded-full bg-white flex justify-center items-center   ">
                            <TiGroup
                                size={30}
                                className="text-black fill-current"
                            />
                        </div>
                        <h1 className="tracking-wide leading-14 mt-[3rem] text-center z-20">
                            Theophilus Gyamo (Business lead)
                        </h1>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutUsScreen;
