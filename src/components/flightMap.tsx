import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { ImageOverlay } from 'react-leaflet'
import L, { LatLng, marker } from 'leaflet'
import iconAirport from '../assets/airport-tower.png';
import iconPlane from '../assets/figher-plane.png';
import iconPlane1 from '../assets/small-plane.png';

import 'leaflet/dist/leaflet.css';
import { LocationHooks } from '../utils/locationUpdater';
import { flightMarkers, position } from '../utils/types';

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
  const smallPlaneIcon = L.icon({
    iconUrl: iconPlane1,
    iconRetinaUrl: iconPlane1,
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40]
  })

  const markerCount = useRef<number>(Math.floor(Math.random() * 10));

  const markers = useRef<flightMarkers[]>([]);
 const [markerList, setMarkerList] = useState<flightMarkers[]>([]);

  React.useEffect(() => {
    if (markers?.current.length === 0) {
      for (let ind = 0; ind < markerCount.current; ind++) {
        let poss: position = {
          lat: Math.floor(Math.random() * 500),
          lng: Math.floor(Math.random() * 500),
        };
        let x: flightMarkers = {
          position: poss, destination:'e'
        };
        markers.current.push(x)
      }
      for (let ind = 0; ind < markerCount.current; ind++) {
        let poss: position = {
          lat: Math.floor(Math.random() * 500),
          lng: Math.floor(Math.random() * 500),
        };
        let x: flightMarkers = {
          position: poss, destination:'es'
        };
        setMarkerList(markerList => [...markerList, x])
      }
    }

  }, []);
 
  LocationHooks.useDispatch(() => { getFlightLocation() }, 5000);

  const getFlightLocation = useCallback(() => {
    // let index = Math.floor(Math.random() * markers.length);
    if (markers?.current.length > 0) {
      console.log('Updating')

     let index = Math.floor(Math.random() * markers?.current.length );
     let oldmarker = markers.current[index];
      let poss: position = {
        lat: Math.floor(Math.random() * (oldmarker.position.lat-10 - oldmarker.position.lat+10) + oldmarker.position.lat+10),
        lng: Math.floor(Math.random() * (oldmarker.position.lng-10 - oldmarker.position.lng+10) + oldmarker.position.lng+10),
      };
      let x: flightMarkers = {
        position: poss, destination:'x'
      };
    markers.current[index]=x;
    let newState = [...markerList];
    newState[index] = x;
    setMarkerList(newState)
    
    }
   
  }, []);

  

  const bounds = L.latLngBounds(L.latLng(0, 0), L.latLng(2000, 2000));
  const boundsMap = L.latLngBounds(L.latLng(0, 0), L.latLng(1000, 1000));
  const style = { width: '100%', height: '80%' }
  const mapRef = useRef(null);

  return (
    <MapContainer ref={mapRef} crs={L.CRS.Simple} center={[400, 400]} minZoom={0} bounds={boundsMap} style={style}>

      <Marker
        icon={airportIcon} position={[800, 500]}>
        <Popup>
          Airport. <br /> Icons.
        </Popup>
      </Marker>
  { markers.current && markers.current.map((value, key) => (
              <Marker
                key={key}
                icon={planeIcon}
                position={value.position}
                >
                  <Popup>{value.destination}</Popup>
                </Marker>
                
                ))}

{ markerList.map((value, key) => (
              <Marker
                key={key}
                icon={smallPlaneIcon}
                position={value.position}
                >
                  <Popup>{value.destination}</Popup>
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