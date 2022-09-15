import React, { useState } from "react";

const CairoMainText = (props) => {
    const handleClick = () =>
        props.onClick(false)

    return (
        <div className="cairoText" onClick={handleClick}>{props.text}</div>
    )
}
export default CairoMainText