import React, { Component } from "react";
import styles from "./SearchBar.module.css";


export default class SearchBar extends Component {


  render() {
    return (
      <div className={styles.searchBar}>
         <h3> Search for Business 🔎  &nbsp; 
        <input type="text" name="search" onChange={ this.props.mySearch } /></h3>
      </div>
    )
  }
}
