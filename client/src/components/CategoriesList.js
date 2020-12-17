import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoriesList.module.css";


export default class CategoriesList extends Component {
  render() {
    return (
      <div>
      <center> 
        <button>
        <Link to={"/categories/Art & Entertainment"}>
          <h3> Art & Entertainment </h3>
        </Link>
        </button>
        
        <button>
        <Link to={"/categories/Finance"}> <h3> Tech & Finance </h3></Link>
        </button>

        <button>
        <Link to={"/categories/Food & Drinks"}> <h3>Food & Drinks </h3></Link>
        </button>

        <button>
        <Link to={"/categories/Health & Beauty"}>  <h3> Health & Beauty </h3>  </Link>
        </button>

        <button>
        <Link to={"/categories/Hospitality"}> <h3> Hospitality </h3></Link>
        </button>
        <button>
        <Link to={"/categories/Media & Design"}> <h3>Media & Design </h3></Link>
        </button>
        <button>
        <Link to={"/categories/Retail"}><h3>Retail</h3></Link>
        </button>
        </center>
      </div>
    );
  }
}
