import Keycloak from 'keycloak-js';

interface KeycloakConfig {
  url: string;
  realm: string;
  clientId: string;
}

const keycloakConfig:KeycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'music-search',
  clientId: 'zarmariya',
};

const keycloak = Keycloak(keycloakConfig);

export default keycloak;
