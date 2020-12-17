import React, { Component } from "react";

// import the css from map box
import "mapbox-gl/dist/mapbox-gl.css";

// import our css styles
import styles from "./mapbox.module.css";

// import mapbox
import mapboxgl from "mapbox-gl";

// put this in your env before you deploy!
mapboxgl.accessToken =
  "pk.eyJ1IjoidmVzbmFtIiwiYSI6ImNraXEzMXk2NzBjczgyc3A5NzM1cnZ4eHUifQ.3lDAsenrxdP6Sq4WVSo43g";

class Mapbox extends Component {
  state = {
    lng: this.props.long,
    lat: this.props.lat,
    zoom: 20,
  };

  // once the page has loaded we can use the componentDidMount to pull in the information form Mapbox
  componentDidMount() {
    // declare the map
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    // declare the marker
    let marker = new mapboxgl.Marker({
      // the offset option fixes something weird that it does when it renders. Not sure what this is but I looked it up and added this.
      offset: [0, -50 / 2],
    })
      .setLngLat([this.state.lng, this.state.lat])
      .addTo(map);
  }

  render() {
    console.log("state from mapbox", this.state);
    return (
      <div>
        <div
          className={styles.container}
          ref={(el) => (this.mapContainer = el)}
        />
      </div>
    );
  }
}

export default Mapbox;
