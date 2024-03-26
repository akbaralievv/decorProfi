import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const api_key = import.meta.env.VITE_REACT_GOOGLE_MAP_API_KEY;

function Maps() {
  useEffect(() => {
    const apiKey = api_key;
    const additionalOptions = {};

    const loader = new Loader({
      apiKey,
      version: 'weekly',
      ...additionalOptions,
    });

    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary('maps');

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
        const url = 'https://2gis.uz/tashkent/firm/70000001061157502';
        window.open(url, '_blank');
      });
    });
  }, []);

  return <div id="map"></div>;
}

export default Maps;
