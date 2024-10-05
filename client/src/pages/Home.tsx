import weatherConfig from '@/config/weather';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import { currentTime, now, getDay } from '@/helpers/date';
import { useEffect, useState } from 'react';
import { IQuery, IWeatherData } from '@/types/models';

const Home = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [query, setQuery] = useState<IQuery>({
    location: import.meta.env.VITE_APP_DEFAULT_LOCATION,
    startDate: now().current(),
    endDate: now().addDays(4),
  });

  const getWeatherImage = (conditions: string): string => {
    if (conditions?.includes('Rain') && conditions?.includes('cloudy')) {
      return weatherConfig.images.partlyCloudyDay;
    } else if (conditions?.includes('cloudy')) {
      return weatherConfig.images.cloud;
    } else if (conditions?.includes('clear')) {
      return weatherConfig.images.sun;
    } else if (
      conditions?.includes('Rain') &&
      conditions?.includes('Overcas')
    ) {
      return weatherConfig.images.rain;
    } else if (conditions?.includes('Wind')) {
      return weatherConfig.images.wind;
    } else {
      return weatherConfig.images.sun;
    }
  };

  const fetchWeatherData = async (query: IQuery) => {
    console.log('Fetching weather data');
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_API_ENDPOINT}/weather?location=${query.location}&startDate=${query.startDate}&endDate=${query.endDate}`);
    const data = await response.json();
    if (!data) return;
    console.log(data);
    setWeatherData(data.data);
  };

  useEffect(() => {
    fetchWeatherData(query);
  }, [query]);

  return (
    <main
      style={{
        width: '100%',
        height: '100vh',
        margin: '0 auto',
        padding: '60px 0 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <SearchBar
        query={query}
        onQuery={setQuery}
        onFetchWeather={fetchWeatherData}
      />

      <section className="current-weather">
        <div className="container">
          <div className="row flex justify-center gap-10">
            <div className="flex flex-col justify-center items-start gap-8">
              <h1>{weatherData?.resolvedAddress}</h1>
              <h1 className="col temp-title p-0" id="current-temperature">
                {weatherData?.days?.length && weatherData.days[0].temp}°
              </h1>
            </div>
            <div className="flex flex-col items-start justify-end font-medium text-lg mb-10">
              <h2 id="current-day" className="inline">
                <b className="italic">Time: </b> {currentTime()}{' '}
                {now().current()}
              </h2>
              <h2 id="weather-type">
                <b className="italic">Conditions: </b>{' '}
                {weatherData?.days?.length && weatherData.days[0].conditions}
              </h2>
              <h2>
                <b className="italic">Humidity: </b>{' '}
                {weatherData?.days?.length && weatherData.days[0].humidity}
              </h2>
              <h2>
                <b className="italic">Wind: </b>{' '}
                {weatherData?.days?.length && weatherData.days[0].windspeed}
              </h2>
            </div>
          </div>
        </div>
        <hr />
      </section>

      <section className="container">
        <div className="row week-forecast">
          {weatherData?.days?.map((day) => (
            <div className="flex flex-col items-center col">
              <h3>{getDay(new Date(day?.datetime))}</h3>
              <br />
              <img src={getWeatherImage(day?.conditions)} />
              <br />
              <p className="weather">{day?.conditions}</p>
              <span>{day?.temp}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
