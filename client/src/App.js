// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header.js";
import Businesses from "./components/Businesses";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Redirect } from "react-router-dom";
import AddBusiness from "./components/AddBusiness";
import axios from "axios";
import BusinessDetails from "./components/BusinessDetails";
import Home from "./components/Home";
import OwnBusiness from "./components/OwnBusiness";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories"; 

class App extends Component {
  state = {
    user: this.props.user,
    // user: "",
  };


  setUser = (user) => {
    this.setState({
      user: user,
    });
  };
  render() {
    console.log("props*********", this.props);
    return (
      <div className="App">
        <Header user={this.state.user} setUser={this.setUser} />

        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path="/businesses/:id"
          render={(props) => (
            <BusinessDetails user={this.state.user} {...props} />
          )}
        />

        <Route exact path="/add-business" component={AddBusiness} />

        <Route
          exact
          path="/my-own-business"
          render={(props) => <OwnBusiness setUser={this.setUser} {...props} />}
        />

      <Route exact path="/categories/:category"  render={(props) => (
            <Categories  {...props} />
          )} />

        <Footer />
      </div>
    );
  }
}

export default App;
