import React, { useEffect, useState } from 'react';
import './App.css';
import { APP_NAME, FOOTER_TEXT } from './utils/types';
import { Dimensions, getImageSize } from 'react-image-size';
import FlightMap from './components/flightMap';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={require('./assets/flight2go-logo.png')} />
        <h2>{APP_NAME}</h2>
      </div>
      <div className="app-content">
        <FlightMap></FlightMap>
      </div>
      <div className="footer">
        {FOOTER_TEXT}
      </div>
    </div>
  );
}

export default App;
