import React from 'react';
import './App.css';
import { Footer } from './layouts/HomepPage/NavBarAndFooter/Footer';

import { NavBar } from './layouts/HomepPage/NavBarAndFooter/NavBar';
import { HomePage } from './layouts/HomepPage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBookPage';

export const  App = () => {
  return (
    <div>
    <NavBar/>
    <SearchBooksPage/>
    {/*
    <HomePage/>
    */}
    <Footer/>
    </div>
  );
}

