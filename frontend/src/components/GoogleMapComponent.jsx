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
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
        >
          <Marker position={center} />
        </GoogleMap>

        <a
          href="https://google.com/maps?um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KSm0v0lePa47MeC7_-nkFtRk&daddr=11/36,+Kathreguppe+Cross+Road,+Kathreguppe,+Banashankari+3rd+Stage,+Banashankari,+Bengaluru,+Karnataka+560085"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
        >
          Open in Google Maps
        </a>
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
