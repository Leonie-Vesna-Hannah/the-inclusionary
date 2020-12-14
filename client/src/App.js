import logo from './logo.svg';
import './App.css';
import React from "react"; 
import Header from "./components/Header.js"; 
import Businesses from "./components/Businesses.js"; 
import Footer from "./components/Footer.js";
import { Route } from 'react-router-dom';
import BusinessDetails from "./components/BusinessDetails.js"; 
import Home from "./components/Home.js"; 

function App() {
  return (
    <div className="App">
      <Header />
     
      <Footer />

      <Route
        exact
        path='/'
        component={Home}
      />

      <Route
        exact
        path='/businesses/:id'
        component={BusinessDetails}
      />


    </div>
  );
}

export default App;
