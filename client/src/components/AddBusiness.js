import React, { Component } from "react";
import axios from "axios";
import service from "../services/upload.js";
import styles from "./AddBusiness.module.css";

class AddBusiness extends Component {
  state = {
    user: this.props.user,
    title: "",
    headOfBusiness: "",
    description: "",
    category: "",
    street: "",
    houseNumber: "",
    city: "",
    zipCode: "",
    country: "",
    email: "",
    // design: "",
    picture: "",
    publicID: "",
    submitted: false,
    imageSelected: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    this.setState({
      imageSelected: true,
    });
    const uploadData = new FormData();
    uploadData.append("picture", e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        const picture = response.secure_url;
        const publicID = response.public_id;
        console.log("res from handleupload: ", response.secure_url);
        this.setState({ picture: picture, publicID: publicID });
        console.log("new state: ", this.state.picture);
        // check if the form already got submitted and only waits for the image upload
        if (this.state.submitted === true) {
          this.handleSubmit();
        }
      })
      .catch((err) => {
        this.setState({
          imageSelected: false,
        });
        console.log("Error while uploading the file: ", err);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.picture || !this.state.imageSelected) {
      axios
        .post("/api/businesses", {
          title: this.state.title,
          headOfBusiness: this.state.headOfBusiness,
          description: this.state.description,
          category: this.state.category,
          street: this.state.street,
          houseNumber: this.state.houseNumber,
          city: this.state.city,
          zipCode: this.state.zipCode,
          country: this.state.country,
          email: this.state.email,
          design: this.state.design,
          picture: this.state.picture,
          imagePublicID: this.state.publicID,
        })
        .then(() => {
          // set the form to it's initial state (empty input fields)
          // this.setState({
          //   title: "",
          //   headOfBusiness: "",
          //   description: "",
          //   // category: [],
          //   street: "",
          //   houseNumber: null,
          //   city: "",
          //   zipCode: null,
          //   email: "",
          //   // design: [],
          //   picture: "",
          //   publicID: "",
          // });
          this.props.history.push("/my-own-business");
          // update the parent components state (in Projects) by calling getData()
          //this.props.getData();
        })
        .catch((err) => console.log(err));
    } else {
      // set a flag that the project got submitted
      this.setState({
        submitted: true,
      });
    }
  };

  render() {
    console.log("props from add business", this.props);
    return (
      <section className={styles.addBusinessWrapper}>
        <h2>Add your business:</h2>
        <form onSubmit={this.handleSubmit} className={styles.addBusinessForm}>
          <div className={styles.formContent}>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.formContent}>
            <label htmlFor="headOfBusiness">Head of business: </label>
            <input
              type="text"
              id="headOfBusiness"
              name="headOfBusiness"
              value={this.state.headOfBusiness}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.formContent}>
            <label htmlFor="description">Description: </label>
            <textarea
              cols="30"
              rows="8"
              type="text"
              id="description"
              name="description"
              placeholder="Describe your business/service here"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className={styles.formContent}>
            <label htmlFor="category">Category: </label>
            {/* <input
            type="text"
            id="category"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          /> */}
            <select
              className={styles.formSelect}
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="">select a category</option>
              <option value="Art & Entertainment">Art & Entertainment</option>
              <option value="Finance">Tech & Finance</option>
              <option value="Food & Drinks">Food & Drinks</option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Media & Design">Media & Design</option>
              <option value="Retail">Retail</option>
            </select>
          </div>
          <div className={styles.formContent}>
            <label htmlFor="street">Street: </label>
            <input
              type="text"
              id="street"
              name="street"
              value={this.state.street}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.formContent}>
            <label htmlFor="houseNumber">House number: </label>
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              value={this.state.houseNumber}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.formContent}>
            <label htmlFor="city">City: </label>
            <input
              type="text"
              id="city"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.formContent}>
            <label htmlFor="zipCode">ZIP Code: </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.formContent}>
            <label htmlFor="country">Country: </label>
            <input
              type="text"
              id="country"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.formContent}>
            <label htmlFor="email">E-mail: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.formContent}>
            <label htmlFor="picture">Image:</label>
            <input
              type="file"
              name="picture"
              id="picture"
              onChange={this.handleFileUpload}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default AddBusiness;
