import React, { Component } from "react";
import axios from "axios";
import BusinessList from "./BusinessList";
import AddBusiness from "./AddBusiness";
import SearchBar from "./SearchBar";

export default class Businesses extends Component {
  state = {
    businesses: [],
    search: "",
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

  componentDidUpdate() {
    
    // this.setState ({
    //   businesses: filteredBusinesses,
    // })
  }

  mySearch = event => {
    this.setState({
      search: event.target.value,
    })
  }

  render() {
    const filteredBusinesses = this.state.businesses.filter(business => {
      return business.title.includes(this.state.search)
    });
        console.log(filteredBusinesses);

    return (
      <div className="businesses-container">
        <SearchBar mySearch = { this.mySearch }/>
        {/* <AddBusiness getData={this.getData} /> */}
        <BusinessList businesses={filteredBusinesses} />
      </div>
    );
  }
}


