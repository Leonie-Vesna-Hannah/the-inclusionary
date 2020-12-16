import React, { Component } from "react";
import axios from "axios";

class EditBusiness extends Component {
  render() {
    // console.log("props from edit business", this.props);
    return (
      <section>
        <h1>Edit business:</h1>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.props.title}
            onChange={this.props.handleChange}
          />
          <br></br>
          <label htmlFor="headOfBusiness">Head of business: </label>
          <input
            type="text"
            id="headOfBusiness"
            name="headOfBusiness"
            value={this.props.headOfBusiness}
            onChange={this.props.handleChange}
          />
          <br></br>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={this.props.description}
            onChange={this.props.handleChange}
          />
          <br></br>

          <label htmlFor="category">Category: </label>
          {/* <input
            type="text"
            id="category"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          /> */}
          <select
            id="category"
            name="category"
            value={this.props.category}
            onChange={this.props.handleChange}
          >
            <option value="">select a category</option>
            <option value="Art & Entertainment">Art & Entertainment</option>
            <option value="Finance">Finance</option>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Health">Health</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Media & Design">Media & Design</option>
            <option value="Retail">Retail</option>
          </select>

          <br></br>

          <label htmlFor="street">Street: </label>
          <input
            type="text"
            id="street"
            name="street"
            value={this.props.street}
            onChange={this.props.handleChange}
          />
          <br></br>

          <label htmlFor="houseNumber">House number: </label>
          <input
            type="number"
            id="houseNumber"
            name="houseNumber"
            value={this.props.houseNumber}
            onChange={this.props.handleChange}
          />
          <br></br>

          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            value={this.props.city}
            onChange={this.props.handleChange}
          />
          <br></br>

          <label htmlFor="zipCode">ZIP Code: </label>
          <input
            type="number"
            id="zipCode"
            name="zipCode"
            value={this.props.zipCode}
            onChange={this.props.handleChange}
          />
          <br></br>

          <label htmlFor="country">Country: </label>
          <input
            type="text"
            id="country"
            name="country"
            value={this.props.country}
            onChange={this.props.handleChange}
          />
          <br></br>

          <label htmlFor="email">E-mail: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
          <br></br>
          <label htmlFor="picture">Image:</label>
          <input
            type="file"
            name="picture"
            id="picture"
            onChange={this.props.handleFileUpload}
          />
          <br></br>
          <button type="submit">Update Business</button>
        </form>
      </section>
    );
  }
}

export default EditBusiness;
