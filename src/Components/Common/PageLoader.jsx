import React from "react";
import { Spinner } from "reactstrap";

const PageLoader = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                zIndex: 9999,
            }}
        >
            <Spinner type="grow" color="success" />
        </div>
    );
};

export default PageLoader;
