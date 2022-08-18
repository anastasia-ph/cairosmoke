import React from "react";
import "./../style/backgroundContainer.scss"

const BackgroundContainer = ({ children }) => {
    return (
        <div className="container">{children}</div>
    )
}
export default BackgroundContainer;