import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CategoriesList extends Component {
  render() {
    return (
      <div>
        <Link to={"/categories/Art & Entertainment"}>
          Art & Entertainment
        </Link>
        <Link to={"/categories/Finance"}>Finance</Link>
        <Link to={"/categories/Food & Drinks"}>Food & Drinks</Link>
        <Link to={"/categories/Health & Beauty"}>Health & Beauty</Link>
        <Link to={"/categories/Hospitality"}>Hospitality</Link>
        <Link to={"/categories/Media & Design"}>Media & Design</Link>
        <Link to={"/categories/Retail"}>Retail</Link>
      </div>
    );
  }
}
