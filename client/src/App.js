// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header.js";
import Businesses from "./components/Businesses.js";
import Footer from "./components/Footer.js";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Redirect } from "react-router-dom";
import AddBusiness from "./components/AddBusiness";
import axios from "axios";
import BusinessDetails from "./components/BusinessDetails.js";
import Home from "./components/Home.js";
import OwnBusiness from "./components/OwnBusiness.js";
import StyleGuide from "./components/StyleGuide.js"; 

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

        <Route exact path="/businesses/:id" component={BusinessDetails} />

        <Route exact path="/OwnBusiness" component={OwnBusiness} />

        <Route exact paht="/StyleGuide" component={StyleGuide} />
       

        <Footer />
      </div>
    );
  }
}

export default App;
