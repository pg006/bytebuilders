import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const position = [51.505, -0.09];

  return (
    <React.Fragment>
      <div className="pt-5 mt-4">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="mapleaflet ht-300"
          id="leaflet1"
          style={{ height: "300px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </React.Fragment>
  );
};
export default Map;
