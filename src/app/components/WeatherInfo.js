import React from 'react';

const WeatherInfo = (props) => {

  console.log(props);

  return (

    <div>
      {
        props.error &&
        <div className='alert alert-danger'>
        <p>{props.error}</p>
      </div>
      }
{
  props.city && props.country ? (
    <div className='card card-body'>
      <p>
        Location: {props.city}, {props.country}
      </p>
      <p>
        Temperature: {props.temperature} °C 
      </p>
      <p>
        Description: {props.description}
      </p>
      <p>
        Humidity: {props.humidity}%
      </p>
      <p>
        Wind Speed: {props.wind_speed} m/s
      </p>
    </div>
  ) : (
    !props.error &&  (
      <div className='card card-body'>
        <p>No Request Yet</p>
      </div>
    )
  )
}
</div>
  )
  
}
export default WeatherInfo;
