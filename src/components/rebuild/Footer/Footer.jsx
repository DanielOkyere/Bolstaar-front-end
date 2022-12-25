import React from "react";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./Footer.css"
function Footer() {
    return (
        <>
            <div className="footer-section">
                <Container>
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find Us</h4>
                                        <span>Accra - Ghana</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call Us</h4>
                                        <span>0303962185</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail Us</h4>
                                        <span>info@bolstaar.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="#">
                                            <h1 className="display-5">Bolstaar</h1>
                                        </a>
                                    </div>
                                    <p></p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow Us</span>
                                    <a href="https://facebook.com/bolstaar">
                                        <i className="fab fa-facebook-f facebook-bg"></i>
                                    </a>
                                    <a href="https://www.instagram.com/bolstaar_">
                                        <i className="fa-brands fa-instagram" ></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Contact Us</li>
                                        <li>Sponsors</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                    <div className="copyright-text">
                                        <p>Copyright &copy; 2022, All Rights reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Footer;
