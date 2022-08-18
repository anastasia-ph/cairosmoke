import React, { useState } from "react";
import "./../style/cairoMainText.scss"

const CairoMainText = (props) => {
    const handleClick = () =>
        props.onClick(false)

    return (
        <div className="cairoText" onClick={handleClick}>{props.text}</div>
    )
}
export default CairoMainText