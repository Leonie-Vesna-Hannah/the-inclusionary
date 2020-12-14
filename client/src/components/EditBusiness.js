import React, { Component } from "react";
import axios from "axios";

class EditBusiness extends Component {
  render() {
    return (
      <section>
        <h1>Edit business:</h1>
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

          <button type="submit">Update Business</button>
        </form>
      </section>
    );
  }
}

export default EditBusiness;
