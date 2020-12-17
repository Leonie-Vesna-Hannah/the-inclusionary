import React, { Component } from "react";
import axios from "axios";
import EditBusiness from "./EditBusiness";
import service from "../services/upload.js";
import Mapbox from "./mapbox/Mapbox";
import styles from "./BusinessDetails.module.css";


export default class BusinessDetails extends Component {
  state = {
    business: null,
    editForm: false,
    error: null,
    title: "",
    headOfBusiness: "",
    picture: "",
    description: "",
    category: "",
    // address: [],
    street: "",
    houseNumber: "",
    city: "",
    zipCode: "",
    country: "",
    email: "",
    publicID: "",
    submitted: false,
    imageSelected: false,
    lat: 52.52,
    long: 13.4,
  };

  getData = () => {
    const id = this.props.match.params.id;
    // get the business that was clicked from the server
    axios
      .get(`/api/businesses/${id}`)
      .then((response) => {
        // console.log("response from get data", response);
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
        // console.log(err.response);
        console.log(err);

        if (err.response.status === 404) {
          this.setState({
            error: "Sorry - Business Not found",
          });
        }
      });
  };

  latLngCall = () => {
    const street = this.state.street.split(" ").join("%20");

    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${street}%20${this.state.houseNumber}%20${this.state.zipCode}%20${this.state.city}.json?country=DE&access_token=pk.eyJ1IjoidmVzbmFtIiwiYSI6ImNraXEzMXk2NzBjczgyc3A5NzM1cnZ4eHUifQ.3lDAsenrxdP6Sq4WVSo43g`
      )
      .then((result) => {
        
        this.setState({
          // center: (2) [13.423872, 52.486002]
          lat: result.data.features[0].center[1],
          long: result.data.features[0].center[0],
        });
      });
  };

  componentDidMount = () => {
    this.getData();
    setTimeout(() => {
      this.latLngCall();
    }, 2000);
  };

  deleteBusiness = () => {
    // delete this business from the database
    const id = this.props.match.params.id;
    axios.delete(`/api/businesses/${id}`).then(() => {
      // this is how you do a redirect with react router dom
      // console.log("deleted!");
      this.props.history.push("/my-own-business");
    });
  };

  toggleEditForm = () => {
    this.setState((prevState) => ({
      editForm: !prevState.editForm,
    }));
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

    console.log("upload data", uploadData);

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
    const id = this.props.match.params.id;
    if (this.state.picture || !this.state.imageSelected) {
      axios
        .put(`/api/businesses/${id}`, {
          title: this.state.title,
          headOfBusiness: this.state.headOfBusiness,
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
          imagePublicID: this.state.publicID,
        })
        .then((response) => {
          this.setState({
            business: response.data,
            title: response.data.title,
            headOfBusiness: response.data.headOfBusiness,
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
            publicID: response.data.publicID,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // set a flag that the project got submitted
      this.setState({
        submitted: true,
      });
    }
  };


        
  


  render() {
    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (!this.state.business) return <h1>Loading...</h1>;

    let allowedToDelete = false;
    const user = this.props.user;
    console.log("user", user);
    console.log("props", this.props);

    const owner = this.state.business.owner;
    if (user && user._id === owner) allowedToDelete = true;

    return (
     
      <section className={styles.businessList}>
      <center>
        
        <img src={this.state.business.picture} alt="business" />
        <h1>{this.state.business.title}</h1>
        <p><b>Owner: </b>{this.state.business.headOfBusiness}</p>
        <p class={styles.businessDescription}> {this.state.business.description}</p>
        <p> <b>Category: </b> {this.state.business.category}</p>
        
        <div className={styles.businessAdress}>
         <b>Address:</b><br>

        </br>
        {this.state.business.street} &nbsp; 
        {this.state.business.houseNumber} <br></br>
         {this.state.business.zipCode} &nbsp; 
        {this.state.business.city} <br></br>

        {this.state.business.country} <br></br>
        {this.state.business.email}
        </div>

        <br></br>

        {allowedToDelete && (
          <button onClick={this.deleteBusiness}>Delete Business</button>
        )}

        {allowedToDelete && (
          <button onClick={this.toggleEditForm}>Edit Business</button>
        )}

        <br></br>

          {// For demonstration only
          }
         <a href="http://www.schokofabrik.de/" about="blank">
          <button onClick={this.backgroundColor}>Go To Website</button>
          </a>
        

        {this.state.editForm && (
          <EditBusiness
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleFileUpload={this.handleFileUpload}
          />
        )}
        <br></br><br></br>
        <div className={styles.mapbox}> 
        <Mapbox lat={this.state.lat} long={this.state.long}  /> 
        </div>
      
        </center>
      </section>
      
    );
  }
}
