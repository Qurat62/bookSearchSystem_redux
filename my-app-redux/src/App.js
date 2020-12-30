import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route } from "react-router-dom";

import Menu from './components/Layout/Menu';

import ParentHome from './ParentHome';
import Book from './components/Home/Book';
import store from './store';
function App() {
  
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Menu/>
        
        <Route exact path="/" component={ParentHome} />
        <Route exact path="/Book/:id" component={Book} />
    
      </div>
    </Router>
  </Provider>

    );
}

export default App;
