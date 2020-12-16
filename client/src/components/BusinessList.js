import React from "react";
import { Link } from "react-router-dom";
import styles from "./BusinessList.module.css";

export default function BusinessList(props) {
  return (
    <section className={styles.businessList}>
      {props.businesses &&
        props.businesses.map((business) => {
          return (
            <div key={business._id} className={styles.businessDetailsItem}>
              <figure className={styles.imgWrapper}>
                <img src={business.picture} alt="businessPicture"></img>
              </figure>
              <div className={styles.businessCardBottom}>
                <h2 className={styles.businessName}>
                  <Link to={`/businesses/${business._id}`}>
                    {" "}
                    {business.title}
                  </Link>
                </h2>

                <span className={styles.businessCategory}>
                  {business.category}
                </span>
                {business.headOfBusiness && (
                  <span className={styles.businessHead}>
                    Head of Business: <strong>{business.headOfBusiness}</strong>
                  </span>
                )}

                <p className={styles.businessCity}>{business.city}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
}
