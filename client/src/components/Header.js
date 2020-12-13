import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";

const handleLogout = (props) => {
  // console.log(props);
  logout().then(() => {
    props.setUser(null);
  });
};

function Header(props) {
  return (
    <section>
      {props.user ? (
        <nav>
          <Link to="/" onClick={() => handleLogout(props)}>
            Log out
          </Link>
          <Link to="/my-own-business">See your business profile</Link>
        </nav>
      ) : (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </nav>
      )}
    </section>
  );
}

export default Header;
