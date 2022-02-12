import React from 'react';

const City = ({ data }) => {
    console.log(data)
  return (
    <div className='city'>
        <h2 className='city-name'>
            <span>{data.name}</span>
            <sup>{data.sys.country}</sup>
        </h2>
        <div className='city-temp'>
            {Math.round(data.main.temp)}
            <sup>&deg;C</sup>
        </div>
        <div className='info'>
            <img 
                className='city-icon'
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
            />
            <p>{data.weather[0].description}</p>
        </div>
    </div>
  )
}

export default City;
