import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default class CategoriesList extends Component {
  render() {
    return (
      <div>
       <Link to={"/categories/arts&entertainment"}>Arts & Entertainment</Link> 
       <Link to={"/categories/finance"}>Finance</Link> 
       <Link to={"/categories/food&drinks"}>Food & Drinks</Link> 
       <Link to={"/categories/health"}>Health</Link> 
       <Link to={"/categories/hospitality"}>Hospitality</Link> 
       <Link to={"/categories/media&design"}>Media & Design</Link>
       <Link to={"/categories/retail"}>Retail</Link>
       
      </div>
    )
  }
}
