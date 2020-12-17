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
          Art & Entertainment
        </Link>
        </button>
        
        <button>
        <Link to={"/categories/Finance"}>Finance</Link>
        </button>

        <button>
        <Link to={"/categories/Food & Drinks"}>Food & Drinks</Link>
        </button>

        <button>
        <Link to={"/categories/Health & Beauty"}>Health & Beauty</Link>
        </button>

        <button>
        <Link to={"/categories/Hospitality"}>Hospitality</Link>
        </button>
        <button>
        <Link to={"/categories/Media & Design"}>Media & Design</Link>
        </button>
        <button>
        <Link to={"/categories/Retail"}>Retail</Link>
        </button>
        </center>
      </div>
    );
  }
}
