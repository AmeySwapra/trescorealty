import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ selectedCity }) => {
  const mapRef = useRef(null);
  const cityCoordinates = {
    Mumbai: [19.0760, 72.8777],
    Pune: [18.5204, 73.8567],
    Nagpur: [21.1458, 79.0882],
    Nashik: [20.0118, 73.7900],
    Aurangabad: [19.8762, 75.3433],
    Solapur: [17.6895, 75.9064],
    Kolhapur: [16.7054, 74.2434],
    Thane: [19.2183, 72.9784],
  };

  useEffect(() => {
    if (mapRef.current) {
      const coordinates = cityCoordinates[selectedCity] || [19.0760, 72.8777];
      const map = L.map(mapRef.current).setView(coordinates, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coordinates)
        .addTo(map)
        .bindPopup(`${selectedCity}, India`)
        .openPopup();

      return () => {
        map.remove();
      };
    }
  }, [selectedCity]);

  return (
    <div
      ref={mapRef}
      style={{ height: '500px', width: '100%' }}
    />
  );
};

export default MapComponent;
