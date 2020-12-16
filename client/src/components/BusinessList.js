import React from "react";
import { Link } from "react-router-dom";
import styles from "./BusinessList.module.css";

export default function BusinessList(props) {
  return (
    <section className={styles.businessList}>
      {props.businesses.map((business) => {
        return (
          <div key={business._id} className={styles.businessDetailsItem}>
            <figure className={styles.imgWrapper}>
              <img src={business.picture} alt="businessPicture"></img>
            </figure>
            <div className={styles.businessCardBottom}>
              <Link to={`/businesses/${business._id}`}>
                {" "}
                <h2 className={styles.businessName}>{business.title}</h2>
              </Link>

              <p>{business.category}</p>

              <p>{business.headOfBusiness}</p>
              <p>{business.city}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
