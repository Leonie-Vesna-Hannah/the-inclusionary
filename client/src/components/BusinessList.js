import React from "react";
import { Link } from "react-router-dom";

export default function BusinessList(props) {
  return (
    <div>
      {props.businesses.map((business) => {
        return (
          <div key={business._id}>
            <h3>
              <Link to={`/businesses/${business._id}`}>{business.title}</Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}