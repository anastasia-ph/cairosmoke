import React from "react";

const PopupInputField = (props) => {
    return (
        <input type="input" maxLength={props.length} className="popup__input" placeholder={props.placeholder}></input>
    )
}
export default PopupInputField