import React from 'react';
import './App.css';
import { Footer } from './layouts/HomepPage/NavBarAndFooter/Footer';

import { NavBar } from './layouts/HomepPage/NavBarAndFooter/NavBar';
import { HomePage } from './layouts/HomepPage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBookPage';
import { Redirect, Route, Switch } from 'react-router-dom';

export const  App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
    <NavBar/>
    <div className='flex-grow-1'>
    <Switch>
    <Route path='/' exact>
      <Redirect to='/home'/>
       <HomePage/>
    </Route>
    <Route path='/home' >
       <HomePage/>
    </Route>
    <Route path='/search'>
         <SearchBooksPage/>
    </Route>
    </Switch>
    </div>
    <Footer/>
    </div>
  );
}

