import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmVzbmFtIiwiYSI6ImNraXEzMXk2NzBjczgyc3A5NzM1cnZ4eHUifQ.3lDAsenrxdP6Sq4WVSo43g";

class Mapbox extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      lng: this.props.long,
      lat: this.props.lat,
      zoom: 20,
    },
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    var geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [this.state.lng, this.state.lat],
          },
          properties: {
            title: "Mapbox",
            description: "Washington, D.C.",
          },
        },
      ],
    };

    geojson.features.forEach((marker) => {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }))
        .addTo(map);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.long !== this.props.long) {
      this.setState({ lng: this.props.long, lat: this.props.lat });
    }
  }
  render() {
    console.log("state from mapbox", this.state);
    return <div ref={(el) => (this.mapContainer = el)} />;
  }
}

export default Mapbox;
