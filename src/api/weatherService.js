import citiesData from './cities.json';
import weatherData from './weather.json';

class WeatherService {
    static getCities() {
        return citiesData;
    }

    static getWeatherForCity(id) {
        const weatherDataForCity = weatherData.filter((city) => city.id === parseInt(id));
        return weatherDataForCity ? weatherDataForCity[0]: {};
    }
}

export default WeatherService;