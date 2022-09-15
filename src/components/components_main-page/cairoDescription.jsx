import React from "react";
import { Children } from "react";
const CairoDescription = (props) => {
    return (
        props.isDescription ? (<div class="cairo__description">{props.desc}</div >) : null
    )
}

export default CairoDescription;