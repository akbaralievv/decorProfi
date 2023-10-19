import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Maps = () => {
  const address = [41.356027457645574, 69.24709812057183];
  const [zoom, setZoom] = useState(16); // Установите начальное значение zoom

  // Функция для обновления zoom на основе размера экрана
  const updateZoom = () => {
    if (window.innerWidth < 768) {
      setZoom(10); // Установите значение zoom для мобильных устройств
    } else {
      setZoom(16); // Установите значение zoom для больших экранов
    }
  };

  // Используйте useEffect для обновления zoom при изменении размера экрана
  useEffect(() => {
    updateZoom();
    window.addEventListener('resize', updateZoom); // Слушайте событие изменения размера окна

    // Очистите слушателя событий при размонтировании компонента
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
      <Marker position={address}>
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
