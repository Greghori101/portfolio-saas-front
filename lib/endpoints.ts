// lib/constants/endpoints.ts

const API_PREFIX = '/api/v1';

export const ENDPOINTS = {
  // Auth
  LOGIN: `${API_PREFIX}/login`,
  REGISTER: `${API_PREFIX}/register`,
  ME: `${API_PREFIX}/me`,
  LOGOUT: `${API_PREFIX}/logout`,

  // Portfolios
  PORTFOLIOS: {
    BASE: `${API_PREFIX}/portfolios`,
    SHOW: (id: string | number) => `${API_PREFIX}/portfolios/${id}`,
    UPDATE: (id: string | number) => `${API_PREFIX}/portfolios/${id}`,
    DELETE: (id: string | number) => `${API_PREFIX}/portfolios/${id}`,
  },

  // Themes
  THEMES: {
    BASE: `${API_PREFIX}/themes`,
    SHOW: (id: string | number) => `${API_PREFIX}/themes/${id}`,
    UPDATE: (id: string | number) => `${API_PREFIX}/themes/${id}`,
    DELETE: (id: string | number) => `${API_PREFIX}/themes/${id}`,
  },

  // Subscriptions
  SUBSCRIPTIONS: {
    BASE: `${API_PREFIX}/subscriptions`,
    SHOW: (id: string | number) => `${API_PREFIX}/subscriptions/${id}`,
    UPDATE: (id: string | number) => `${API_PREFIX}/subscriptions/${id}`,
    DELETE: (id: string | number) => `${API_PREFIX}/subscriptions/${id}`,
  },
};
