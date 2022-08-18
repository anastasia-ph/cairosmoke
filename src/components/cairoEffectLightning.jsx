import React from "react";
import Lightning from "./../assets/lightningAnimation.png"
import "./../style/cairoLightningEffect.scss"
const CairoEffectLightning = () => {
    return (
        <div className="cairoContainer">
            <img class="cairoLightning" src={Lightning}></img>
        </div>
    )
}
export default CairoEffectLightning