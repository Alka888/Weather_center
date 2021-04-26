import React from 'react'
import './weather.css'

function Weather({ weather, dateBuilder }) {
    return (
        <div>
            <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>

            <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}°F
                    <img alt="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                </div>

                <div className="weather">
                    {weather.weather[0].main}
                </div>

                <div className="wind">
                    {Math.floor(weather.wind.speed)} mph
                </div>
            </div>
        </div>
    )
}

export default Weather
