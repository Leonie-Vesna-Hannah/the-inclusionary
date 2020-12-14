import React, { Component } from "react";
import axios from "axios";
import EditBusiness from "./EditBusiness";

export default class BusinessDetails extends Component {
  state = {
    business: null,
    editForm: false,
    error: null,
    title: "",
    headOfBusiness: "",
    picture: "",
    description: "",
    category: [],
    street: "",
    houseNumber: "",
    city: "",
    zipCode: "",
    country: "",
    email: "",
  };

  getData = () => {
    const id = this.props.match.params.id;
    // get the business that was clicked from the server
    axios
      .get(`/api/businesses/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          business: response.data,
          title: response.data.title,
          headOfBusiness: response.data.headOfBusiness,
          picture: response.data.picture,
          description: response.data.description,
          category: response.data.category,
          street: response.data.street,
          houseNumber: response.data.houseNumber,
          city: response.data.city,
          zipCode: response.data.zipCode,
          country: response.data.country,
          email: response.data.email,
          // design: response.data.design,
        });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 404) {
          this.setState({
            error: "Sorry - Business Not found",
          });
        }
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  deleteBusiness = () => {
    // delete this business from the database
    const id = this.props.match.params.id;
    axios.delete(`/api/businesses/${id}`).then(() => {
      // this is how you do a redirect with react router dom
      this.props.history.push("/my-own-business");
    });
  };

  render() {
    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (!this.state.business) return <h1>Loading...</h1>;

    let allowedToDelete = false;
    const user = this.props.user;
    const owner = this.state.business.owner;
    if (user && user._id === owner) allowedToDelete = true;

    return (
      <section className="business-details-section">
        <h1>{this.state.business.title}</h1>
        <p>{this.state.business.headOfBusiness}</p>
        <img
          style={{ width: "100px" }}
          src={this.state.business.picture}
          alt="business"
        />
        <p>{this.state.business.description}</p>
        <p>{this.state.business.category}</p>
        <p>{this.state.business.street}</p>
        <p>{this.state.business.houseNumber}</p>
        <p>{this.state.business.city}</p>
        <p>{this.state.business.zipCode}</p>
        <p>{this.state.business.country}</p>
        <p>{this.state.business.email}</p>

        {allowedToDelete && (
          <button onClick={this.deleteBusiness}>Delete Business</button>
        )}
      </section>
    );
  }
}
