import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import styles from "./Header.module.css";

const handleLogout = (props) => {
  // console.log(props);
  logout().then(() => {
    props.setUser(null);
  });
};

function Header(props) {
  return (
    <section className={styles.headerSection}>
      {props.user ? (
        <nav>
        <Link className={styles.linkTo} to="/" >Home</Link>
          <Link className={styles.linkTo} to="/my-own-business">See your business profile</Link>
          <Link className={styles.linkTo}  to="/" onClick={() => handleLogout(props)}>
            Log out
          </Link>
        </nav>
      ) : (
        <nav>
          <Link className={styles.linkTo}  to="/">Home</Link>
          <Link className={styles.linkTo} to="/signup">Signup</Link>
          <Link className={styles.linkTo} to="/login">Login</Link>
        </nav>
      )}
   
    </section>
  );
}

export default Header;
