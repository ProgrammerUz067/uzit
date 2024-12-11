import React from 'react';
import { Outlet, Route, Routes } from 'react-router';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ThemeCTX, { ThemeProviderCTX } from '../../context/ThemeCTX';

export default function Layout({ openBurger, setOpenBurger }) {
  const { theme, setTheme } = React.useContext(ThemeProviderCTX);
  console.log(theme);
  // console.log(theme);
  return (
    <div id={theme}>
      <Preloader />

      <Header openBurger={openBurger} setOpenBurger={setOpenBurger} />
      <Outlet />
      <Footer />
    </div>
  );
}
