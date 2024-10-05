import React from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { ImageOverlay } from 'react-leaflet'
import L from 'leaflet'
import iconAirport from '../assets/airport-tower.png';
import iconPlane from '../assets/figher-plane.png';
import 'leaflet/dist/leaflet.css';

const FlightMap = () => {
    const airportIcon = L.icon({
        iconUrl: iconAirport,
        iconRetinaUrl: iconAirport,
        iconAnchor: [20, 40],
        popupAnchor: [0, -35],
        iconSize: [60, 60]
      })
      const planeIcon = L.icon({
        iconUrl: iconPlane,
        iconRetinaUrl: iconPlane,
        iconAnchor: [20, 40],
        popupAnchor: [0, -35],
        iconSize: [40, 40]
      })
  
  const bounds = L.latLngBounds(L.latLng(0, 0), L.latLng(800, 800));
  const boundsMap = L.latLngBounds(L.latLng(0, 0), L.latLng(500, 500));
  const style = {width:'100%',height:'80%'}
  return (
    <MapContainer crs={L.CRS.Simple} center={[0, 0]} minZoom={0} bounds={boundsMap} style={style}>
          <Marker
            icon={airportIcon} position={[0, 0]}>
            <Popup>
              Airport. <br /> Icons.
            </Popup>
          </Marker>
          <Marker
            icon={airportIcon} position={[300, 500]}>
            <Popup>
              Airport. <br /> Icons.
            </Popup>
          </Marker>
          <Marker
            icon={planeIcon} position={[400, 400]}>
          </Marker>
          <Marker
            icon={planeIcon} position={[405, 440]}>
            
          </Marker>
          <Marker
            icon={planeIcon} position={[350, 300]}>
            
          </Marker>
          <ImageOverlay
            bounds={bounds}
            url={require('../assets/my-world.png')}
          />
        </MapContainer>
  );
};

export default FlightMap;