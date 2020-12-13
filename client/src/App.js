import logo from './logo.svg';
import './App.css';
import React from "react"; 
import Header from "./components/Header.js"; 
import Businesses from "./components/Businesses.js"; 
import Footer from "./components/Footer.js";
import { Route } from 'react-router-dom';
import BusinessDetails from "./components/BusinessDetails.js"; 

function App() {
  return (
    <div className="App">
      <Header />
      <Businesses />
      <Footer />

      <Route
        exact
        path='/projects/:id'
        component={BusinessDetails}
      />

    </div>
  );
}

export default App;
