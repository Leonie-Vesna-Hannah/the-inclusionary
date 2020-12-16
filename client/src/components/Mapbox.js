import React, { Component } from "react";
//import ReactMapGL, { Marker } from "react-map-gl";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmVzbmFtIiwiYSI6ImNraXEzMXk2NzBjczgyc3A5NzM1cnZ4eHUifQ.3lDAsenrxdP6Sq4WVSo43g";

class Mapbox extends Component {
  state = {
    // viewport: {
    // width: "30vh",
    // height: "30vh",
    lng: this.props.long,
    lat: this.props.lat,
    zoom: 12,
    // },
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
  render() {
    console.log("state from mapbox", this.state);
    return (
      <div>
        {/* <Marker
          coordinates={[this.state.lng, this.state.lat]}
          anchor="bottom"
        /> */}
        <div ref={(el) => (this.mapContainer = el)} />
        {/* <ReactMapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapboxApiAccessToken="pk.eyJ1IjoidmVzbmFtIiwiYSI6ImNraXEzMXk2NzBjczgyc3A5NzM1cnZ4eHUifQ.3lDAsenrxdP6Sq4WVSo43g"
        >
          <Marker
            latitude={this.state.viewport.lat}
            longitude={this.state.viewport.lng}
          >
            I'm Here!!!
          </Marker>
        </ReactMapGL> */}
      </div>
    );
  }
}

export default Mapbox;
