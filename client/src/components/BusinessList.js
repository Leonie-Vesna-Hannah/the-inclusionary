import React from "react";
import { Link } from "react-router-dom";

export default function BusinessList(props) {
  return (
    <section className="business-list">
      {props.businesses.map((business) => {
        return (
          <div className="business-list-grid-container" key={business._id}>
            <h2>
              <Link to={`/businesses/${business._id}`}>{business.title}</Link>
              <p>{business.headOfBusiness}</p>
              <p>{business.city}</p>
              <img
                src={business.picture}
                alt="businessPicture"
                style={{ width: "100px" }}
              ></img>
            </h2>
          </div>
        );
      })}
    </section>
  );
}
