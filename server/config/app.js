const config = () => ({
  // ==============================================================================
  // API Endpoints
  // ==============================================================================
  WEATHER_API_URL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
  WEATHER_LOCATION_API_URL: 'https://api.openweathermap.org/geo/1.0/direct',

  pagination: {
    LIMIT: 10,
  },
});

module.exports = config();
