import Container from "react-bootstrap/Container";

function AboutSection() {
    return (
        <div className="about-section">
            <Container>
                <div className="row">
                    <div className="col-sm-12 col-md-6 p-3 m-3 text-white">
                        <h2 className="display-2">About Us</h2>
                        <p className="text-justify m-1">
                            Bolstaar is an agricultural technology integration
                            platform that enables smallholder farmers to access
                            workable technologies and techniques to scale-up and
                            make substantial profit.
                        </p>
                        <p className="text-justify m-1">
                            The platform also provides supply chain information
                            and links farmers to superior markets. Our platform
                            is created with the desire to solve smallholder
                            farmers’ three biggest problems: Lack of access to
                            quality farm resources, goods low in quality and
                            quantity, and market access.
                        </p>
                    </div>
                    <div className="row col">
                        <div className="col-sm-12">
				<div className="row">
					<div className="col-sm-6">
						col1
					</div>
				</div>
			</div>
                        <div className="col-sm-12">
				<div className="row">
					<div className="col-sm-6">
						col2
					</div>
				</div>
			</div>
			<div className="col-sm-12"></div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AboutSection;
