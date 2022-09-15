import React from "react";
import MerchBackButton from "./components_merch-page/merchBackButton"
import MerchContainer from './components_merch-page/merchContainer';
import MerchItem from './components_merch-page/merchItem';
import MerchMainText from './components_merch-page/merchMainText';
import { useState } from "react";
import items from "../../src/items.json"
const MerchWrapper = (props) => {


    return (
        <div className="merch__wrapper">

            <MerchBackButton />
            <MerchMainText text="Merch"></MerchMainText>
            <MerchContainer>
                {items.map((item) => <MerchItem onClick={props.onClick} image={item.image} desc={item.desc} price={item.price}></MerchItem>)}

            </MerchContainer>
        </div>
    )
}
export default MerchWrapper;