const config = {
  // ==============================================================================
  // API Endpoints
  // ==============================================================================
  WEATHER_API_URL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
  WEATHER_LOCATION_API_URL: 'https://api.openweathermap.org/geo/1.0/direct',

  themes: {
    light: {
      background: '#ffffff',
      color: '#000000',
      primary: '#6200ee',
    },
    dark: {
      background: '#121212',
      color: '#ffffff',
      primary: '#bb86fc',
    },
  },

  request: {
    TIMEOUT: 10000,
  },

  pagination: {
    LIMIT: 10,
  },
};

export default config;
