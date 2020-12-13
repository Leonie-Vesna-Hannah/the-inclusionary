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

class App extends Component {
  state = {
    // user: this.props.user,
    user: "",
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
        <Businesses />
        <Footer />
      </div>
    );
  }
}

export default App;
