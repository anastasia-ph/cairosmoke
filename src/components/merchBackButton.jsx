import React from "react";
import "./../style/merchPage.scss"

const merchBackButton = (props) => {
    return (
        <div onClick={props.onClick} className="MerchBackButton"> Return</div>
    )
}
export default merchBackButton