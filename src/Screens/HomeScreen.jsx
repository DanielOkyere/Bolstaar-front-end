import React from "react";
import ControlledCarousel from "../components/carousel_component";
import Container from "react-bootstrap/Container";
import AboutSection from "../components/About_section";
function HomeScreen() {
    return (
        <div>
            <ControlledCarousel />
            <AboutSection />
        </div>
    );
}

export default HomeScreen;
