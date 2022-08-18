import React from "react";
import { Children } from "react";
import "./../style/cairoDescripton.scss"
const CairoDescription = (props) => {
    return (
        props.isDescription ? (<div class="description">{props.desc}</div >) : null
    )
}

export default CairoDescription;