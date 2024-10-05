export interface IQuery {
  location: string;
  startDate?: string;
  endDate?: string;
}

export interface IDayWeather {
  [key: string]: any;
}

export interface IWeatherData {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: IDayWeather[];
}

export interface ILocationSuggestion {
  name: string;
  lat: number;
  lon: number;
}
