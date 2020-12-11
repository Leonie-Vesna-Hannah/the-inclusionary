import logo from './logo.svg';
import './App.css';
import React from "react"; 
import Header from "./components/Header.js"; 
import Businesses from "./components/Businesses.js"; 
import Footer from "./components/Footer.js";


function App() {
  return (
    <div className="App">
      <Header />
      <Businesses />
      <Footer />
    </div>
  );
}

export default App;
