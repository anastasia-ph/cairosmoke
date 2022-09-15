import React from "react";
import { useNavigate } from "react-router";


const MerchBackButton = () => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate("/")} className="merch__back-button"> Return</div>
    )
}
export default MerchBackButton