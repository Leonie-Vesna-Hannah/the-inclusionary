import React, { Component } from "react";
import axios from "axios";
import BusinessList from "./BusinessList";
import AddBusiness from "./AddBusiness";

export default class Businesses extends Component {
  state = {
    businesses: [],
  };

  getData = () => {
    // get the current list of businesses from the server
    axios
      .get("/api/businesses")
      .then((response) => {
        console.log(response);
        // put them into the state
        this.setState({
          businesses: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="businesses-container">
        <AddBusiness getData={this.getData} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
