import React, { Component } from "react";
import axios from "axios";

class AddBusiness extends Component {
  state = {
    user: this.props.user,
    title: "",
    headOfBusiness: "",
    description: "",
    picture: "",
    // category: [],
    street: "",
    houseNumber: "",
    city: "",
    zipCode: "",
    country: "",
    email: "",
    // design: [],
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/api/businesses", {
        title: this.state.title,
        headOfBusiness: this.state.headOfBusiness,
        description: this.state.description,
        picture: this.state.picture,
        // category: this.state.category,
        street: this.state.street,
        houseNumber: this.state.houseNumber,
        city: this.state.city,
        zipCode: this.state.zipCode,
        country: this.state.country,
        email: this.state.email,
        // design: this.state.design,
      })
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          title: "",
          headOfBusiness: "",
          description: "",
          picture: "",
          category: [],
          street: "",
          houseNumber: null,
          city: "",
          zipCode: null,
          email: "",
          // design: [],
        });
        this.props.history.push("/my-own-business");
        // update the parent components state (in Projects) by calling getData()
        //this.props.getData();
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log("props from add business", this.props);
    return (
      <section>
        <h1>Add your business:</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="headOfBusiness">Head of business: </label>
          <input
            type="text"
            id="headOfBusiness"
            name="headOfBusiness"
            value={this.state.headOfBusiness}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="picture">Picture: </label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="category">Category: </label>
          <input
            type="text"
            id="category"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="street">Street: </label>
          <input
            type="text"
            id="street"
            name="street"
            value={this.state.street}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="houseNumber">House number: </label>
          <input
            type="number"
            id="houseNumber"
            name="houseNumber"
            value={this.state.houseNumber}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="zipCode">ZIP Code: </label>
          <input
            type="number"
            id="zipCode"
            name="zipCode"
            value={this.state.zipCode}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="country">Country: </label>
          <input
            type="text"
            id="country"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="email">E-mail: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br></br>

          <button type="submit">Add your Business</button>
        </form>
      </section>
    );
  }
}

export default AddBusiness;
