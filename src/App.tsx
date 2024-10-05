import React from 'react';
import './App.css';
import {APP_NAME, FOOTER_TEXT } from './utils/types'
function App() {
  return (
    <div className="app">
      <div className="header">
        <img src = {require ('./assets/flight2go-logo.png')} />
        <h2>{ APP_NAME }</h2>
      </div>
      <div className="app-content">
        Your will have routes here that will render your components as required
      </div>

      <div className="footer">
        {FOOTER_TEXT}
      </div>
    </div>
  );
}

export default App;
