import React from "react";
import MerchPurchaseButton from './merchPurchaseButton.jsx'

const MerchItem = (props) => {
    return (
        <div className="merch__item" >
            <img src={props.image} className="merch__item-image" alt={props.desc}></img>
            <span className="merch__item-text">{props.desc}</span>
            <span className="merch__item-text">{props.price}</span>
            <MerchPurchaseButton onClick={props.onClick} />
        </div>
    )
}
export default MerchItem