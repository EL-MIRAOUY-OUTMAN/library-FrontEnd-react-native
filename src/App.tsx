import React from 'react';
import './App.css';
import { Footer } from './layouts/HomepPage/NavBarAndFooter/Footer';

import { NavBar } from './layouts/HomepPage/NavBarAndFooter/NavBar';
import { HomePage } from './layouts/HomepPage/HomePage';

export const  App = () => {
  return (
    <div>
    <NavBar/>
    <HomePage/>
    <Footer/>
    </div>
  );
}

