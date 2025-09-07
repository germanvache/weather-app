import React from "react";

const WeatherForm = props => (    
  <>
    <div className="card card-body">
      <form onSubmit={props.getWeather}>
          <h2>Weather App</h2>
          <br />
          <div className="form-group">
              <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus/>
          </div>
          <br />
          <div className="form-group">
              <input type="text" name="country" placeholder="Your Country Name" className="form-control" />
          </div>
          <br />
      <button  className="btn btn-success w-100 mx-auto d-block">
      Get Weather
      </button>
    </form>
    </div>
    
  </>
);


export default WeatherForm;