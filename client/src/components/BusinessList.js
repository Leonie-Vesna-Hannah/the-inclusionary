import React from "react";
import { Link } from "react-router-dom";

export default function BusinessList(props) {
  return (
    <div>
      {props.businesses.map((business) => {
        return (
          <div key={business._id}>
            <h2>
              <Link to={`/businesses/${business._id}`}>{business.title}</Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
