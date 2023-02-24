import React, { useEffect, useState } from 'react'
import keycloak from '../Config/keycloak';

export const Demo = () => {
    const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
      keycloak.authenticated()
        .then((authenticated) => {
          setAuthenticated(authenticated);
        })
        .catch((error) => {
          console.error('Keycloak error: ', error);
        });
    }, []);


  return (
    <div>
        { authenticated && <h1>authenticated</h1>}
    </div>
  )
}
