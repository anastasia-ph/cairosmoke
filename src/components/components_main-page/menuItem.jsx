import React from "react";
import { useNavigate } from "react-router";

const MenuItem = (props) => {
    const navigate = useNavigate()

    return (
        <span id={props.id} onClick={props.id === "merch" ? () => navigate("merch") : props.onClick} className="dropdown__item">{props.title}</span>
    )
}
export default MenuItem