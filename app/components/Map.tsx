"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type MapProps = {
  lat: number;
  lon: number;
};

export default function Map({ lat, lon }: MapProps) {
  return (
    <MapContainer center={[lat, lon] as [number, number]} zoom={15} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  );
}
