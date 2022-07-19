import React from "react";
import getOurApp from "../Assets/Images/GetourApp.png";
import LOGO from "../Assets/Images/LOGO.png";
import { footerList } from "./Footer.data";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
function Footer(props) {
    const { onClick } = props;
    return (
        <>
            <Container>
                <div className="flex justify-center">
                    <img src={getOurApp} className="relative top-16 w-2/3" />
                </div>
                <div className="row">
                    {footerList.map(({ to, display }) => {
                        <li
                            className="col-sm-6 col-md-4"
                            onClick={onClick}
                            key={display}
                        >
                            <Link to={to}>{display}</Link>
                        </li>;
                    })}
                </div>
            </Container>
        </>
    );
}

export default Footer;
