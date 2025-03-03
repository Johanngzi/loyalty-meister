import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 40.6782,
    longitude: -73.9442,
    zoom: 12,
  });

  return (
    // Ensure the parent container takes full width and height
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1Ijoiam9oYW5uZ3ppIiwiYSI6ImNsemp4amxpMTBvcjIycXIweDU3eWYyYWYifQ.SJ5fCosfpl9g6A0cfXY2qQ"
        style={{ width: "100%", height: "100%" }} // Map will take full size of container
        onMove={(evt) => setViewport(evt.viewState)}
      >
        <Marker latitude={40.6782} longitude={-73.9442} />
      </ReactMapGL>
    </div>
  );
};

export default Map;
