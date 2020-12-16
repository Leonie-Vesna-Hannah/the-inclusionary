import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmVzbmFtIiwiYSI6ImNraXEzMXk2NzBjczgyc3A5NzM1cnZ4eHUifQ.3lDAsenrxdP6Sq4WVSo43g";

class Mapbox extends Component {
  state = {
    lng: this.props.long,
    lat: this.props.lat,
    zoom: 14,
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

    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });
  }
  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} />
      </div>
    );
  }
}

export default Mapbox;
