import React from 'react';
import './App.scss';
import CityDropdown from './components/CityDropdown/CityDropdown'
import WeatherForecast from './components/WeatherForecast/WeatherForecast'

class App extends React.Component {

  state = {
    selectedCity: ""
  }

  cityChanged = (city) => {
    this.setState({selectedCity: city});
  }

  render() {
    return (
      <div className="App">
        <CityDropdown cityChanged={this.cityChanged}></CityDropdown>
        <WeatherForecast city={this.state.selectedCity}></WeatherForecast>
      </div>
    );
  }

}

export default App;
