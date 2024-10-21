import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mainbody from './Mainbody';
import Offers from './Offers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Mainbody />
    <Offers />
  </React.StrictMode>
);

