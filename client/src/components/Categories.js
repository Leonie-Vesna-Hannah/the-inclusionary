import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CategoriesList from "./CategoriesList";

export default class Categories extends Component {
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
    // console.log(this.state.businesses);

    console.log(this.props);
    return (
      <div>
       <CategoriesList /> 

        {this.state.businesses
          .filter(
            (businesses) =>
              businesses.category === this.props.match.params.category
          )
          .map((filteredBusiness) => (
            <div>
              <Link to={`/businesses/${filteredBusiness._id}`}>
                {" "}
                {filteredBusiness.title}{" "}
              </Link>
            </div>
          ))}
      </div>
    );
  }
}
