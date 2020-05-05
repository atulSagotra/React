import React from 'react';
import logo from './logo.svg';
import Contacts from "./Components/Contacts/Contacts"
import './App.css';
import Header from './Components/layout/Header';
import AddContact from './Components/Contacts/AddContact'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider }from './Context';

function App() {
  return (
    <Provider>
      <div className="App">
      <Header branding = "Contact Manager"/>
      <div className="container">
        <AddContact/>
        <Contacts/>
      </div>
      
    </div>
    </Provider>
  );
}

export default App;
