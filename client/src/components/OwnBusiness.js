// show my own business

// + Button to -> edit business
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddBusiness from "./AddBusiness";
class OwnBusiness extends Component {
  state = {
    businesses: [],
  };
  componentDidMount() {
    axios.get("/api/businesses/my-own-business").then((response) => {
      console.log(response);
      this.setState({
        businesses: response.data,
      });
    });
  }
  render() {
    return (
      <section>
        <h2>
          {this.state.businesses &&
            this.state.businesses.map((business) => {
              return (
                <div>
                  <Link to={`/businesses/${business._id}`}>
                    {business.title}
                  </Link>
                </div>
              );
            })}
        </h2>
        <Link to="/add-business">Add Business</Link>

        
      </section>
    );
  }
}

export default OwnBusiness;
