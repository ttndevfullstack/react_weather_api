const config = require('../config/app');
const axios = require('axios');
const RedisService = require('./RedisService');

require('dotenv').config();

class WeatherService {
  async getWeatherData(params) {
    const { location, startDate, endDate } = params;

    if (!location || !startDate || !endDate) {
      return res.status(400).send({ error: 'Location, Start Date, End Date are required!' });
    }

    const WEATHER_ENDPOINT = `${config.WEATHER_API_URL}/${location}/${startDate}/${endDate}?key=${process.env.WEATHER_API_KEY}`;
    const cacheKey = `${location}:${startDate}-${endDate}`.toLowerCase();
    console.log('cacheKey: ', cacheKey);

    try {
      await RedisService.connect();
      const cachedData = await RedisService.get(cacheKey);

      if (cachedData) {
        console.log('Get data from cache with key: ', cacheKey);
        return JSON.parse(cachedData);
      }

      console.log(cachedData);

      const response = await axios.get(WEATHER_ENDPOINT);
      const oneDay = 24 * 60 * 60 * 1000;
      await RedisService.setExpire(cacheKey, JSON.stringify(response.data), oneDay);

      return response.data;
    } catch (error) {
      console.error('Error fetching weather data', error);
      res.status(500).send({ error: 'Failed to fetch weather data' });
    }
  }
}

module.exports = new WeatherService();
