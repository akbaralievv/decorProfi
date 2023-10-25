import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Loader } from '@googlemaps/js-api-loader';

const api_key = import.meta.env.VITE_REACT_GOOGLE_MAP_API_KEY;

function Maps() {
  useEffect(() => {
    const apiKey = api_key;
    const additionalOptions = {}; // Дополнительные опции

    // Создаем новый объект Loader
    const loader = new Loader({
      apiKey,
      version: 'weekly',
      ...additionalOptions,
    });

    // Загружаем Google Maps
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary('maps');

      // Создаем карту
      const map = new Map(document.getElementById('map'), {
        center: { lat: 41.356992, lng: 69.248448 },
        zoom: 17,
      });
      const marker = new google.maps.Marker({
        position: { lat: 41.356992, lng: 69.248448 },
        map,
        title: 'Рынок Джами ул. Широк 120а',
      });
      marker.addListener('click', () => {
        // Здесь вы можете указать URL для перехода
        const url = 'https://2gis.uz/tashkent/firm/70000001061157502'; // Замените на нужный URL
        window.open(url, '_blank'); // Открывает URL в новом окне
      });
    });
  }, []);

  return <div id="map"></div>;
}

export default Maps;
