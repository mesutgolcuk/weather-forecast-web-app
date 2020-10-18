import React from 'react';
import { FormattedMessage } from 'react-intl';
import WeatherService from "../../api/weatherService";
import './WeatherForecast.scss';

class WeatherForecast extends React.Component {

    render() {
        const city = this.props.city;
        const weatherData = WeatherService.getWeatherForCity(city);
        if(weatherData && weatherData.values) {
            return(
                <div className="weather-info">
                    {weatherData?.values.map((weather, index) => {
                        return(
                            <p key={index}>
                                <FormattedMessage id={'days.' + weather.day}/> : {weather.degree} Degree - <FormattedMessage id={'weather.' + weather.status}/>
                            </p>
                        )
                    })}
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default WeatherForecast;