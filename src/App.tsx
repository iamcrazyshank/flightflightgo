import React, { useEffect, useState } from 'react';
import './App.css';
import { APP_NAME, FOOTER_TEXT } from './utils/types';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { ImageOverlay } from 'react-leaflet'
import L from 'leaflet'
import iconAirport from './assets/airport-tower.png';
import 'leaflet/dist/leaflet.css';
import { Dimensions, getImageSize } from 'react-image-size';

function App() {
  
  const [token, setToken] = useState<Dimensions>();

  const airportIcon = L.icon({
    iconUrl: iconAirport,
    iconRetinaUrl: iconAirport,
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [60, 60]
  })
  useEffect(() => {
    async function fetchImageSize() {
      try {
        const dimensions = await getImageSize('./assets/my-world.png');
        console.log(dimensions);
        setToken(dimensions)
      } catch (error) {
        console.error(error);
      }
    }
    if (!token) {
      fetchImageSize();
  }
  }, []);


  const bounds = L.latLngBounds(L.latLng(0, 0), L.latLng(1000, 1000));
  const boundsMap = L.latLngBounds(L.latLng(0, 0), L.latLng(1000, 1000));

  const style = { height: '100vh', width: '100vw' }

  return (
    <div className="app">
      <div className="header">
        <img src={require('./assets/flight2go-logo.png')} />
        <h2>{APP_NAME}</h2>
      </div>
      <div className="app-content">
        <MapContainer crs={L.CRS.Simple} center={[0, 0]} minZoom={0} bounds={boundsMap} style={style}>
          <Marker
            icon={airportIcon} position={[260, 400]}>
            <Popup>
              Airport. <br /> Icons.
            </Popup>
          </Marker>
          <ImageOverlay
            bounds={bounds}
            url={require('./assets/my-world.png')}
          />
        </MapContainer>
      </div>
      <div className="footer">
        {FOOTER_TEXT}
      </div>
    </div>
  );
}

export default App;
