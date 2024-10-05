const config = () => ({
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
});

export default config;
