 import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44345/',
  redirectUri: baseUrl,
  clientId: 'Ecommerce_App',
  responseType: 'code',
  scope: 'offline_access Ecommerce',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Ecommerce',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44345',
      rootNamespace: 'Buraq.Ecommerce',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
