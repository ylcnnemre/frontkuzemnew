import React from "react";
import { Col } from "reactstrap";


const AuthSlider = () => {
    return (
        <React.Fragment>

            <Col lg={6}>
                <div className="p-lg-5 p-4 auth-one-bg h-100" style={{ minHeight: "200px" }}>
                    <div className="bg-overlay"></div>
                    <div className="position-relative h-100 d-flex flex-column">
                        <div className="mt-auto">
                        </div>
                    </div>
                </div>
            </Col>
        </React.Fragment >
    );
};

export default AuthSlider;