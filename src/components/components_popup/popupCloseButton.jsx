import React from "react";

const PopupCloseButton = (props) => {
    return (
        <div className="popup__close-button" onClick={props.onClick}>
            <img className="popup__close-button_icon" src="./assets/close.png"></img>
        </div>

    )
}
export default PopupCloseButton