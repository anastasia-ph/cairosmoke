import React from "react";
import PopupItem from "./components_popup/popupItem";
import PopupInputField from "./components_popup/popupInputField";
import PopupSubmitButton from "./components_popup/popupSubmitButton"
import PopupCloseButton from "./components_popup/popupCloseButton"
import PopupGif from './components_popup/popupGif';
import { setGifPath } from "../utils/setGifPath";
import { useState } from "react";



const PopupContainer = (props) => {
    const [gifURL, setGifUrl] = useState("undefined");
    const [formSent, setFormSent] = useState(false)

    let validateForm = () => {
        let inputFields = document.getElementsByClassName("popup__input")
        for (let i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value === '') {
                inputFields[i].classList.add("input-field__error")
            }
        }
        // setGifPath(setGifUrl, setFormSent)
    }


    return (
        <div className="popup__container">

            <PopupItem>
                <PopupCloseButton onClick={props.onClick}></PopupCloseButton>
                {formSent ? <><PopupGif link={gifURL}>

                </PopupGif> <p className="merch__item-text purchase-completed">Thanks for purchase!</p>
                </> :
                    <>
                        <p className="popup__header">Purchase form</p>
                        <PopupInputField length="unset" placeholder="Your Name"></PopupInputField>
                        <PopupInputField length="19" placeholder="Card number"></PopupInputField>
                        <PopupSubmitButton onClick={() => validateForm()}></PopupSubmitButton>
                    </>}
            </PopupItem>


        </div>
    )
}
export default PopupContainer