import React, { Component } from "react";



export default class SearchBar extends Component {


  render() {
    return (
      <div>
        <h1>Search</h1>
        <input type="text" name="search" onChange={ this.props.mySearch } />
      </div>
    )
  }
}
