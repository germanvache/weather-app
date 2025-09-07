import React, {Component} from 'react';

import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

import { WEATHER_KEY } from './keys';

class App extends Component {

  state = {
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    wind_speed:'',
    error: null
  };
    

  getWeather = async e => {
    e.preventDefault();
    const{city, country} = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (!cityValue || !countryValue) {
      this.setState({ error: 'Please enter the values.' });
      return;
    }

    if (cityValue && countryValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
    

    this.setState({
      temperature: data.main ? data.main.temp : '',
      city: data.name ? data.name : '',
      country: data.sys ? data.sys.country : '',
      humidity: data.main ? data.main.humidity : '',
      description: data.weather ? data.weather[0].description : '',
      wind_speed: data.wind ? data.wind.speed : '',
      error: !data.main ? 'Please enter a valid city and country' : null
    });
    
  } else {
      this.setState({ error: 'Please Enter a city and a country.' });

    } 

       

  }

  render() {
    return (
      <div className="container p-4">
        <div className="row">
            <div className="col-md-4 mx-auto">
                <WeatherForm getWeather={this.getWeather} />
                <WeatherInfo {...this.state} />               
        </div>    
        </div>
      </div>
    );
  }
}

export default App;