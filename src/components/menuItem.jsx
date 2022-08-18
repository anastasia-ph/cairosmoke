import React from "react";
import "./../style/cairoDropdown.scss"

const MenuItem = (props) => {
    return (
        <span id={props.id} onClick={props.onClick} className="dropdown-item">{props.title}</span>
    )
}
export default MenuItem