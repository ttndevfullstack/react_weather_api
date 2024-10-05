import '@/styles/searchbar.css';
import config from '@/config';
import { ILocationSuggestion, IQuery } from '@/types/models';
import { useState } from 'react';

type TProps = {
  query: IQuery;
  onQuery: (query: IQuery) => void;
  onFetchWeather: (query: IQuery) => void;
};

export default function SearchBar(props: TProps) {
  const [suggestions, setSuggestions] = useState<ILocationSuggestion[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const fetchLocationSuggestions = async (input: string) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    const WEATHER_LOCATION_ENDPOINT = `${config.WEATHER_LOCATION_API_URL}?q=${input}&limit=${config.pagination.LIMIT}&key=${import.meta.env.VITE_WEATHER_API_KEY}`;

    try {
      const response = await fetch(WEATHER_LOCATION_ENDPOINT);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Unexpected data format');
      }

      const locationSuggestions = data.map((location: any) => ({
        name: location.name,
        lat: location.lat,
        lon: location.lon,
      }));

      setSuggestions(locationSuggestions);
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    fetchLocationSuggestions(value);
  };

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onQuery({
        ...props.query,
        location: (e.target as HTMLInputElement).value,
      });
    }
  };

  const handleLocationSelect = (location: ILocationSuggestion) => {
    setInputValue(location.name);
    setSuggestions([]);
    props.onQuery({
      ...props.query,
      location: `${location.lat},${location.lon}`,
    });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter location..."
        value={inputValue}
        onChange={handleOnChange}
        onKeyUp={handleOnKeyUp}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleLocationSelect(suggestion)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
