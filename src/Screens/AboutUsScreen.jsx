import React from "react";
import YaaImg from "../Assets/Images/Yaa.jpeg";
import TimothyImg from "../Assets/Images/Theophilus.jpeg";
import Daniel from "../Assets/Images/Daniel.jpeg";
import { Container } from "react-bootstrap";
import { TiGroup } from "react-icons/ti";

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
                <div
                    style={{ backgroundColor: "#F9F8F3" }}
                    className="flex-1  h-[38rem] mb-14  mt-8  flex flex-col md:flex-row md:justify-center items-center gap-4 "
                >
                    <div className="flex flex-col w-[22rem] h-[26rem] bg-white relative border-2 shadow-lg ">
                        <img
                            src={YaaImg}
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
                            Yaa Amoakoah Frimpong <br /> (Team Lead)
                        </h1>
                    </div>
                    <div className="flex flex-col w-[22rem] h-[26rem] bg-white relative border-2 shadow-lg ">
                        <img
                            src={TimothyImg}
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
                            Theophilus Gyamo <br /> (Business lead)
                        </h1>
                    </div>
                    <div className="flex flex-col w-[22rem] h-[26rem] bg-white relative border-2 shadow-lg ">
                        <img
                            src={Daniel}
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
                            Daniel Okyere
                            <br />
                            (Technical Lead)
                        </h1>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutUsScreen;
