import BackgroundContainer from '../components/backgroundContainer';
import MerchWrapper from "../components/merchWrapper"
import PopupContainer from "../components/popupContainer";
import { useState } from 'react';


const MerchPage = () => {
    const [isPopup, setIsPopup] = useState(false);
    return (
        <BackgroundContainer>
            <MerchWrapper onClick={() => setIsPopup(true)}>

            </MerchWrapper>
            {isPopup && <PopupContainer onClick={() => setIsPopup(false)}>
            </PopupContainer>}
        </BackgroundContainer>
    )
}
export default MerchPage;