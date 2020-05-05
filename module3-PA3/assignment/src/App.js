import React from 'react';
import logo from './logo.svg';
import Contact from "./Components/Contact"
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header branding = "Contact Manager"/>
      <Contact name = "John Doe" email = "jdoe@gmail.com" phone = "78945-12345" />
      <Contact name = "Atul Sagotra" email = "atul@gmail.com" phone = "87945-12458" />
      <Contact name = "Krish Sagotra" email = "krish@gmail.com" phone = "74125-74563" />
      <Contact name = "Anmol Sagotra" email = "anmol@gmail.com" phone = "55555-74589" />
    </div>
  );
}

export default App;
