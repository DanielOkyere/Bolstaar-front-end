import React from "react";
import ControlledCarousel from "../components/carousel_component";
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
