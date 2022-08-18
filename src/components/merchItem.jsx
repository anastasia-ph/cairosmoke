import React from "react";

const merchItem = () => {
    return (
        <div>
            <img src={props.src}></img>
            <span>description</span>
            <span>price</span>
            <button>buy</button>
        </div>
    )
}
//add basket, redirection to payment for, payment confirmation
export default merchItem