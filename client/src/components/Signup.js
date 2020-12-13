//-> take me to AddBusiness

import React, { Component } from "react";
import { signup } from "../services/auth";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    signup(username, password).then((data) => {
      console.log("data signup", data);
      if (data.message) {
        this.setState({
          message: data.message,
          username: username,
          password: password,
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/add-bussiness");
      }
    });
  };

  render() {
    // console.log("props--------signup", this.props);
    return (
      <section className="signup-login-form">
        <h1>You can create your business profile here:</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Signup</button>
          {this.state.message && <p>{this.state.message}</p>}
        </form>
      </section>
    );
  }
}

export default Signup;
