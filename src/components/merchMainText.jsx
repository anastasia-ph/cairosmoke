import React, { useState } from "react";
import "./../style/merchPage.scss"

const MerchMainText = (props) => {


    return (
        <div className="MerchMainText">{props.text}</div>
    )
}
export default MerchMainText