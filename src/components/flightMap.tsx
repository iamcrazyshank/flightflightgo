import React, { useEffect, useRef, useState } from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { ImageOverlay } from 'react-leaflet'
import L, { LatLng } from 'leaflet'
import iconAirport from '../assets/airport-tower.png';
import iconPlane from '../assets/figher-plane.png';
import 'leaflet/dist/leaflet.css';
import { LocationHooks } from '../utils/locationUpdater';

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
  
  LocationHooks.useDispatch(() => { getFlightLocation() }, 3000);

  const [marker, setMarker] = useState([0, 0]);
  const initialMarkersState = [0, 1, 2, 3, 4].map((n) => [latitude:51.505, longitude:-0.08 + 0.01 * n]);


  async function getFlightLocation() {
    let index = Math.floor(Math.random() * markers.length);

    //setMarkers(values => values.map((value, i) => i === index ? [Math.floor(Math.random() * 800),Math.floor(Math.random() * 800)]: value));

  }

  const bounds = L.latLngBounds(L.latLng(0, 0), L.latLng(800, 800));
  const boundsMap = L.latLngBounds(L.latLng(0, 0), L.latLng(500, 500));
  const style = { width: '100%', height: '80%' }


  const [markers, setMarkers] = useState<LatLng[]>();

  return (
    <MapContainer crs={L.CRS.Simple} center={[0, 0]} minZoom={0} bounds={boundsMap} style={style}>

      <Marker
        icon={airportIcon} position={[300, 500]}>
        <Popup>
          Airport. <br /> Icons.
        </Popup>
      </Marker>
      {markers.map((position, index) => (
          <Marker
          icon={planeIcon} 
            key={index}
            position={position}
          ><Popup>
          plane. <br /> Icons.
        </Popup>
        </Marker>
        ))}
      
      <ImageOverlay
        bounds={bounds}
        url={require('../assets/my-world.png')}
      />
    </MapContainer>
  );
};

export default FlightMap;