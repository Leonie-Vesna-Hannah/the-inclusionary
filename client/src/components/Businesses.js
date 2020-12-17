import React, { Component } from "react";
import axios from "axios";
import BusinessList from "./BusinessList";
import AddBusiness from "./AddBusiness";
import SearchBar from "./SearchBar";
import styles from "./Businesses.module.css";
import { Link } from "react-router-dom";

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

  // componentDidUpdate() {

  //   // this.setState ({
  //   //   businesses: filteredBusinesses,
  //   // })
  // }

  mySearch = (event) => {
    this.setState({
      search: event.target.value.toLowerCase(),
    });
  };

  render() {
    const filteredBusinesses = this.state.businesses.filter((business) => {
      return business.title.includes(this.state.search);
    });
    console.log(filteredBusinesses);

    return (
      <div className="businesses-container">
        <SearchBar mySearch={this.mySearch} />
        {/* <AddBusiness getData={this.getData} /> */}
      
        <div className={styles.welcomeBox}>
        <div className={styles.welcomeText}>
        <h3 className={styles.welcome}> WELCOME 🙌</h3>
      
      <Link to="/Credits">
      <button class={styles.welcomeButton}> <paragraph>
      
        You are looking for places and businesses led by women*! 
      <br></br> Wonderful, you are aware of the gender gap! <br></br>
      Women fight bravely and powerful a continuous struggle - 
      both in society <br></br> in general and in their places of work. <br></br>
      <b> There is a lot of talk, here you can take action! </b><br></br>
      The road to equality lies ahead, look at our range of businesses,   
      they are all led by women*!<br></br>
      Visit their sites, and support them by going there!
      </paragraph></button> </Link>
      </div>
      </div>
      
      

        <BusinessList businesses={filteredBusinesses} />

     

      </div>
    );
  }
}
