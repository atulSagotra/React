import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import Contacts from "./Components/Contacts/Contacts"
import './App.css';
import Header from './Components/layout/Header';
import AddContact from './Components/Contacts/AddContact'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider }from './Context';

import notfound from './Components/pages/notfound'
import About from './Components/pages/About'

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding = "Contact Manager"/>
          <div className="container">
           <Switch>
             <Route exact path = "/" component = {Contacts}/>
             <Route exact path = "/contact/add" component = { AddContact }/>
             <Route exact path = "/about" component = { About }/>
             <Route component = { notfound }/>
             
           </Switch>
          </div>          
        </div>
      </Router>      
    </Provider>
  );
}

export default App;
