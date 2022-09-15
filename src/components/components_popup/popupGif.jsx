import React from "react";

const PopupGif = (props) => {
    return (
        <div className="gif__container">
            <img className="gif__picture" src={props.link} alt="gif picture"></img>
        </div>
    )
}

export default PopupGif