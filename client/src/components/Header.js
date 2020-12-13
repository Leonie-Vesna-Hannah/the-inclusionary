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
    <div>
      {props.user ? (
        <div>
          <Link to="/" onClick={() => handleLogout(props)}>
            Log out
          </Link>
          <Link to="/my-own-business">See your business profile</Link>
        </div>
      ) : (
        <div>
          <Link to="/businesses">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
