import BackgroundContainer from './components/backgroundContainer';
import CairoMainText from "./components/cairoMainText"
import CairoEffectLightning from './components/cairoEffectLightning';
import MenuContainer from './components/menuContainer';
import MenuBody from "./components/menuBody"
import CairoDescription from './components/cairoDescription';
import MenuItem from './components/menuItem';
import data from "./../src/data.json"
import { useState } from 'react'


function App() {
  const [isSelected, setSelected] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [menuState, setMenuState] = useState(false);
  const [isDescription, setDescription] = useState(false)
  const changeSelected = () =>{

  if (!isSelected){
  setSelected(!isSelected);
  setTimeout(() =>{
    setSelected(false);
    },1800);
    return() => clearTimeout();
  }
  }
  const changeOpen = () =>{
  if(!isOpen){
    setTimeout(()=>{
      setOpen(true);
      },
      1000);}
    else{
      setOpen(false)
      setDescription(false)
    };
  }
const initializeItemClick = (e) =>{
let id = e.target.id
if(id === "aboutme"){

 setDescription(!isDescription)}

else if(id==="soundcloud"){
e.target.onClick(window.open("https://soundcloud.com/cairosmoke", '_blank').focus())
}
}
const handleClick = () =>{
  changeSelected();
  changeOpen();

}
let dropdownElements=[]
{data.map((item)=>dropdownElements.push(<MenuItem id={item.id} key={item.name} onClick={initializeItemClick} title={item.name} >{}</MenuItem>))}
dropdownElements.splice(1,0,<CairoDescription isDescription={isDescription} desc="Hello, I'm Cairo - 24 years old musician from Kyiv, Ukraine. I usually create chill mixes of electronic and lo-fi music. You can check my tracks on soundcloud - link below :)"/>)
dropdownElements.splice(4,0,"MERCH WIP:)")

  return (
    
    <div className="App">
     <BackgroundContainer>
     <CairoMainText onClick={handleClick} text="cairosmoke"> 
     </CairoMainText>
       {isSelected ? <CairoEffectLightning></CairoEffectLightning> : <></>}
       {isOpen ?<MenuContainer className="dropdown-height">
         <MenuBody className="dropdown-body">
          {dropdownElements}
        </MenuBody>
       </MenuContainer> : <div className='dropdown-height'></div>}
     </BackgroundContainer>
    </div>
  );
}

export default App;
