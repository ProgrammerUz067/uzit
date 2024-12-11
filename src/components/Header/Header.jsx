import React from 'react';
import style from './Header.module.scss';
import HeaderRightSide from './HeaderRightSide';
import HeaderLeftSide from './HeaderLeftSide';
import HeaderCenter from './HeaderCenter';
import ToggleTheme from './ToggleTheme';
import Drawer from '../Drawer/Drawer';
import BurgerIcon from '../Burger/BurgerIcon';
import { ThemeProviderCTX } from '../../context/ThemeCTX';

export default function Header({ openBurger, setOpenBurger }) {
  const { theme, setTheme } = React.useContext(ThemeProviderCTX);
  console.log(theme);



  const [isHeaderActive, setIsHeaderActive] = React.useState(false) 


  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= 900) {
      setIsHeaderActive(true) 
      console.log(isHeaderActive);
    } else {
      setIsHeaderActive(false)
      
    }
  };

  window.addEventListener('scroll', handleScroll);
  


  return (
    <header className={`${style.header} ${isHeaderActive ? style['header-active'] : ''}`}>
      <Drawer setOpenBurger={setOpenBurger} openBurger={openBurger} />
      {/* Header left side */}
      <HeaderLeftSide />
      {/* Header center */}
      <HeaderCenter />
      {/* Header right side */}
      <HeaderRightSide />
      <BurgerIcon openBurger={openBurger} setOpenBurger={setOpenBurger} />
    </header>
  );
}
