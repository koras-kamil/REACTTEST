import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { reactDOM } from 'react-dom';
 import Login from './componenet/login/login';
// import { PrintHello, FirstComponent } from './componenet/login/login';

import Navbar from './componenet/navbar';
import Body from './componenet/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     
  <App />

 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

