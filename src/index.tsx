import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import keycloak from './Config/keycloak';
import {BrowserRouter} from "react-router-dom";
// import keycloak from './keycloak';

// keycloak.init({ onLoad: 'login-required' }).then(() => {
//   return 
// });
ReactDOM.render(
    <React.StrictMode>
      < BrowserRouter>
      <App />
      </BrowserRouter>
      
    </React.StrictMode>,
    document.getElementById('root')
  );