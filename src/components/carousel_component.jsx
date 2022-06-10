import { Carousel } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import slider1 from "../Assets/Images/slider1.jpg";
import slider2 from "../Assets/Images/slider2.jpg";
import slider3 from "../Assets/Images/slider3.jpg";
import Container from "react-bootstrap/Container";
function ControlledCarousel() {
    return (
	<Container>
        <Carousel fade>
            <Carousel.Item>
                <div className="row p-4">
                    <div className="col-sm-12 col-md-6">
                        <div className="pt-4">
                            <div className="row mt-4">
                                <div className="jumbotron align-items-center">
                                    <h1 className="text-capitalize display-3 font-weight-bold">
                                        Get quality farm tech & best farm
                                        techniques
                                    </h1>
                                    <p className="lead p-2">
                                        Increase yield by 100%, cut cost of
                                        farming by 50%, and increase profits by
                                        50%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img
                            className="d-block"
                            src={slider1}
                            alt="First slide"
                        />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row p-4">
                    <div className="col-sm-12 col-md-6">
                        <div className="pt-4">
                            <div className="row mt-4">
                                <div className="jumbotron align-items-center">
                                    <h1 className="text-capitalize display-3 font-weight-bold">
                                        Get quality farm tech & best farm
                                        techniques
                                    </h1>
                                    <p className="lead p-2">
                                        Increase yield by 100%, cut cost of
                                        farming by 50%, and increase profits by
                                        50%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img
                            className="d-block "
                            src={slider2}
                            alt="Second slide"
                        />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row p-4">
                    <div className="col-sm-12 col-md-6">
                        <div className="pt-4">
                            <div className="row mt-4">
                                <div className="jumbotron align-items-center">
                                    <h1 className="text-capitalize display-3 font-weight-bold">
                                        Get quality farm tech & best farm
                                        techniques
                                    </h1>
                                    <p className="lead p-2">
                                        Increase yield by 100%, cut cost of
                                        farming by 50%, and increase profits by
                                        50%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img
                            className="d-block "
                            src={slider3}
                            alt="Third slide"
                        />
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
	</Container>
    );
}

export default ControlledCarousel;
