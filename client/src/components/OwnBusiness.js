import React, { Component } from "react";
import axios from "axios";
import EditBusiness from "./EditBusiness";

export default class OwnBusiness extends Component {
  state = {
    business: null,
    editForm: false,
    error: null,
    title: "",
    description: "",
    picture: "",
    category: [],
    street: "",
    houseNumber: "",
    city: "",
    zipCode: "",
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
          description: response.data.description,
          picture: response.data.picture,
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
      this.props.history.push("/businesses");
    });
  };

  toggleEditForm = () => {
    this.setState((prevState) => ({
      editForm: !prevState.editForm,
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`/api/businesses/${id}`, {
        title: this.state.title,
        description: this.state.description,
        picture: this.state.picture,
        category: this.state.category,
        street: this.state.street,
        houseNumber: this.state.houseNumber,
        city: this.state.city,
        zipCode: this.state.zipCode,
        country: this.state.country,
        email: this.state.email,
        // design: response.data.design,
      })
      .then((response) => {
        this.setState({
          business: response.data,
          title: response.data.title,
          description: response.data.description,
          picture: response.data.picture,
          category: response.data.category,
          street: response.data.street,
          houseNumber: response.data.houseNumber,
          city: response.data.city,
          zipCode: response.data.zipCode,
          country: response.data.country,
          email: response.data.email,
          // design: response.data.design,
          editForm: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (!this.state.business) return <h1>Loading...</h1>;
    let allowedToDelete = false;
    const user = this.props.user;
    const owner = this.state.business.owner;
    if (user && user._id === owner) 
    allowedToDelete = true; 

    return (
      <div>
           <h1> My Business </h1> 

           {this.state.business.title}
        <p>{this.state.business.description}</p>
        <p>{this.state.business.picture}</p>
        <p>{this.state.business.category}</p>
        <p>{this.state.business.street}</p>
        <p>{this.state.business.houseNumber}</p>
        <p>{this.state.business.city}</p>
        <p>{this.state.business.zipCode}</p>
        <p>{this.state.business.country}</p>
        <p>{this.state.business.email}</p>
        <p>{this.state.business.design}</p>

        {allowedToDelete && (
          <button variant="danger" onClick={this.deleteBusiness}> 
            Delete Business
          </button>
        )}

        <button onClick={this.toggleEditForm}>Show Edit Form</button>
        {this.state.editForm && (
          <EditBusiness
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}