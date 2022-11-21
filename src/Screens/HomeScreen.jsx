import React from "react";
import ControlledCarousel from "../Components/carousel_component";
import AboutSection from "../Components/About_section";
function HomeScreen() {
    return (
        <div>
            <ControlledCarousel />
            <AboutSection />
        </div>
    );
}

export default HomeScreen;
