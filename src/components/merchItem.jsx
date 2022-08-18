import React from "react";
import MerchPurchaseButton from './merchPurchaseButton.jsx'
import "./../style/merchPage.scss"

const MerchItem = (props) => {
    return (
        <div className="MerchItem">
            <img src={props.src} className="MerchItem__image"></img>
            <span className="MerchItem__text">{props.desc}</span>
            <span className="MerchItem__text">{props.price}</span>
            <MerchPurchaseButton />
        </div>
    )
}
//add basket, redirection to payment for, payment confirmation
export default MerchItem