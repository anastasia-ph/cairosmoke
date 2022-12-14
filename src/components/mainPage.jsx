import React, { useState } from 'react';
import data from "../data.json"
import MenuItem from './components_main-page/menuItem';
import CairoDescription from "./components_main-page/cairoDescription"
import CairoMainText from "./components_main-page/cairoMainText";
import CairoEffectLightning from "./components_main-page/cairoEffectLightning";
import MenuContainer from "./components_main-page/menuContainer";
import MenuBody from "./components_main-page/menuBody";
import { initializeItemClick } from '../utils/initializeItems';

const MainPage = () => {
    const [isSelected, setSelected] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [isDescription, setDescription] = useState(false)
    const changeSelected = () => {
        if (!isSelected) {
            setSelected(!isSelected);
            setTimeout(() => {
                setSelected(false);
            }, 1800);
            return () => clearTimeout();
        }
    }
    const changeOpen = () => {
        if (!isOpen) {
            setTimeout(() => {
                setOpen(true);
            },
                1000);
        }
        else {
            setOpen(false)
            setDescription(false)
        };
    }

    const handleClick = () => {
        changeSelected();
        changeOpen();
    }
    const initializeItemClick = (e) => {
        let id = e.target.id
        if (id === "aboutme") {

            setDescription(!isDescription)
        }
        else if (id === "soundcloud") {
            e.target.onClick(window.open("https://soundcloud.com/cairosmoke", '_blank').focus())
        }
    }

    let dropdownElements = []
    { data.map((item) => dropdownElements.push(<MenuItem id={item.id} key={item.name} onClick={initializeItemClick} title={item.name} >{ }</MenuItem>)) }
    dropdownElements.splice(1, 0, <CairoDescription isDescription={isDescription} desc="Hello, I'm Cairo - 24 years old musician from Kyiv, Ukraine. I usually create chill mixes of electronic and lo-fi music. You can check my tracks on soundcloud - link below :)" />)


    return (
        <React.Fragment>
            <CairoMainText onClick={handleClick} text="cairosmoke">
            </CairoMainText>
            {isSelected ? <CairoEffectLightning></CairoEffectLightning> : <></>}
            {isOpen ? <MenuContainer className="dropdown-height">
                <MenuBody className="dropdown-body">
                    {dropdownElements}
                </MenuBody>
            </MenuContainer> : <div className='dropdown-height'></div>} </React.Fragment>

    )
}
export default MainPage