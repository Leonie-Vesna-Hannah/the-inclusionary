import React, { Component } from "react";
import { login } from "../services/auth";
import styles from "./Signup.module.css";

class Login extends Component {
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

    login(username, password).then((data) => {
      console.log("data login", data);
      if (data.message) {
        this.setState({
          message: data.message,
          username: username,
          password: password,
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/my-own-business");
      }
    });
  };

  render() {
    // console.log("props--------signup", this.props);
    return (
      <section className={styles.signupWrapper}>
        <h1>Log in here:</h1>
        <form onSubmit={this.handleSubmit} className={styles.signupForm}>
          <div className={styles.signupUsername}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className={styles.signupPass}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>
          <button type="submit">Log in</button>
          {this.state.message && <p>{this.state.message}</p>}
          <div className={styles.googleLogin}>
            <a href="http://localhost:5555/api/auth/google">
              Log in With Google
            </a>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
