import React from "react";
let validateInput = (fieldName) => {
    return (e) => {
        if (fieldName === "Your Name") {
            let inputValueLength = (e.currentTarget.value).length
            let lastChar = e.currentTarget.value[inputValueLength - 1]
            let appliedClassNames = e.currentTarget.className

            if (appliedClassNames.includes("input-field__error")) {
                e.currentTarget.className = "popup__input"
            }
            if (lastChar * 0 == 0) {
                e.currentTarget.value = (e.currentTarget.value).replace(lastChar, "");
            }



        }

        if (fieldName === "Card number") {
            let inputValueLength = (e.currentTarget.value).length
            let lastChar = e.currentTarget.value[inputValueLength - 1]
            let onlyDigitsLength = ((e.currentTarget.value).replaceAll("-", "")).length;
            let appliedClassNames = e.currentTarget.className

            if (appliedClassNames.includes("input-field__error")) {
                e.currentTarget.className = "popup__input"
            }

            if (lastChar * 0 != 0) {
                return e.currentTarget.value = (e.currentTarget.value).replace(lastChar, "");
            }


            else if (onlyDigitsLength % 4 == 0 && onlyDigitsLength < 16) {
                console.log(onlyDigitsLength)

                return e.currentTarget.value = e.currentTarget.value + '-'
            }
        }
    }

}

const PopupInputField = (props) => {
    return (
        <input type="input" maxLength={props.length} onChange={validateInput(props.placeholder).bind(this)} className="popup__input" placeholder={props.placeholder}></input>
    )
}
export default PopupInputField