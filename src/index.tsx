import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import keycloak from './Config/keycloak';
// import keycloak from './keycloak';

// keycloak.init({ onLoad: 'login-required' }).then(() => {
//   return 
// });
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );