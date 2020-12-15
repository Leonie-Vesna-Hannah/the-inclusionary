import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default class CategoriesList extends Component {
  render() {
    return (
      <div>
       <Link to={"/categories/Arts & Entertainment"}>Arts & Entertainment</Link> 
       <Link to={"/categories/Finance"}>Finance</Link> 
       <Link to={"/categories/Food & Drinks"}>Food & Drinks</Link> 
       <Link to={"/categories/Health"}>Health</Link> 
       <Link to={"/categories/Hospitality"}>Hospitality</Link> 
       <Link to={"/categories/Media & Design"}>Media & Design</Link>
       <Link to={"/categories/Retail"}>Retail</Link>  
      </div>
    )
  }
}
