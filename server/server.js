const express = require('express');
const cors = require('cors');
const WeatherService = require('./services/WeatherService');

require('dotenv').config();

const app = express();
const PORT = process.env.APP_PORT || 8000;

app.use(cors());

app.get('/api/weather', async (req, res) => {
  const data = await WeatherService.getWeatherData(req.query);
  return res.status(201).json({
    status: 201,
    success: true,
    data: data,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
