import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: Import createRoot from 'react-dom/client'
import App from './App';
import './index.css'

const rootElement = document.getElementById('root');

// Create a root and render the application
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);