import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Your map initialization code here
      const map = L.map("map").setView([27.709875, 85.321471], 100); // Increase the zoom level
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy;',
      }).addTo(map);

      // Add a marker for your location
      const marker = L.marker([27.709875, 85.321471]).addTo(map);

      // Enable zoom controls
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Open Google Maps on map click
      map.on("click", () => {
        const latlng = marker.getLatLng();
        const googleMapsUrl = `https://www.google.com/maps?q=${latlng.lat},${latlng.lng}`;
        window.open(googleMapsUrl, "_blank");
      });

      mapRef.current = map;
    }

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "250px", height: "150px", cursor: "pointer" }} // Increase the height
    ></div>
  );
};

export default MapComponent;
