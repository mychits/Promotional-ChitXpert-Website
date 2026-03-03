import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 12.9255,  // Banashankari approx
  lng: 77.5468,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
      
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
