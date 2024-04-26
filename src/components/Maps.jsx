import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const api_key = import.meta.env.VITE_REACT_YANDEX_MAP_API_KEY;

function Maps() {
  return (
    <div id="map">
      <YMaps query={{ apikey: api_key, load: 'package.full' }}>
        <Map
          defaultState={{
            center: [41.357104, 69.248502],
            zoom: 17,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          width="100%"
          height="400px">
          <Placemark geometry={[41.357104, 69.248502]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default Maps;
