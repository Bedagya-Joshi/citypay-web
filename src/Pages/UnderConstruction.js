import React from "react";
import UC from "../Assets/UC.png";

function UnderConstruction() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${UC})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "100%",
                height: "100vh",
            }}
        >
        </div>
    );
}

export default UnderConstruction;
