import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import { Icon } from 'leaflet';
import icon from '../assets/icons/location.png';

delete Icon.Default.prototype._getIconUrl;

const Maps = () => {
  const address = [41.356027457645574, 69.24709812057183];
  const [zoom, setZoom] = useState(16);

  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [30, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  // Функция для обновления zoom на основе размера экрана
  const updateZoom = () => {
    if (window.innerWidth < 768) {
      setZoom(10);
    } else {
      setZoom(16);
    }
  };

  // useEffect для обновления zoom при изменении размера экрана
  useEffect(() => {
    updateZoom();
    window.addEventListener('resize', updateZoom);

    return () => {
      window.removeEventListener('resize', updateZoom);
    };
  }, []);

  return (
    <MapContainer center={address} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={address} icon={customIcon}>
        <Popup>
          <a href="https://2gis.ru/tashkent/geo/70000001061157502" target="_blank">
            Рынок Джами ул. Широк 120а
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
