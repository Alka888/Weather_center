import React, { useEffect, useState } from 'react'
import './forecast.css'

function Forecast({ weather }) {

    const [day, setDay] = useState('')

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=&units=imperial&appid=728bcc2dfead7ea2a3423dfe5d58ca45`)
            .then(res => res.json())
            .then(result => {
                setDay(result)
            });
    }, [])

    return (
        <div className="container mt-3">
            <h1 className="display-5"> Weather Forecast for Next Week</h1>
            <div class="row">
                <div className="col-lg-4">
                    <div className="card">
                        <h4 className="card-text">{day && new Date(day.daily[1].dt * 1000).toLocaleDateString("en-US")}</h4>
                        <p>Morning: {day && Math.round(day.daily[1].temp.morn)}°F</p>
                        <p>Day: {day && Math.round(day.daily[1].temp.day)}°F</p>
                        <p>Evening: {day && Math.round(day.daily[1].temp.eve)}°F</p>
                        <p className="card-text">{day && day.daily[1].weather[0].main}</p>
                        <p>Wind: {Math.round(day && day.daily[1].wind_speed)} mph</p>
                        <img className="image" alt="icon" src={day && `http://openweathermap.org/img/wn/${day.daily[1].weather[0].icon}@2x.png`} />
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <h4 className="card-text">{day && new Date(day.daily[2].dt * 1000).toLocaleDateString("en-US")}</h4>
                        <p>Morning: {day && Math.round(day.daily[2].temp.morn)}°F</p>
                        <p>Day: {day && Math.round(day.daily[2].temp.day)}°F</p>
                        <p>Evening: {day && Math.round(day.daily[2].temp.eve)}°F</p>
                        <p className="card-text">{day && day.daily[2].weather[0].main}</p>
                        <p>Wind: {Math.round(day && day.daily[2].wind_speed)} mph</p>
                        <img className="image" alt="icon" src={day && `http://openweathermap.org/img/wn/${day.daily[2].weather[0].icon}@2x.png`} />
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <h4 className="card-text">{day && new Date(day.daily[3].dt * 1000).toLocaleDateString("en-US")}</h4>
                        <p>Morning: {day && Math.round(day.daily[3].temp.morn)}°F</p>
                        <p>Day: {day && Math.round(day.daily[3].temp.day)}°F</p>
                        <p>Evening: {day && Math.round(day.daily[3].temp.eve)}°F</p>
                        <p className="card-text">{day && day.daily[3].weather[0].main}</p>
                        <p>Wind: {Math.round(day && day.daily[3].wind_speed)} mph</p>
                        <img className="image" alt="icon" src={day && `http://openweathermap.org/img/wn/${day.daily[3].weather[0].icon}@2x.png`} />
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <h4 className="card-text">{day && new Date(day.daily[4].dt * 1000).toLocaleDateString("en-US")}</h4>
                        <p>Morning: {day && Math.round(day.daily[4].temp.morn)}°F</p>
                        <p>Day: {day && Math.round(day.daily[4].temp.day)}°F</p>
                        <p>Evening: {day && Math.round(day.daily[4].temp.eve)}°F</p>
                        <p className="card-text">{day && day.daily[4].weather[0].main}</p>
                        <p>Wind: {Math.round(day && day.daily[4].wind_speed)} mph</p>
                        <img className="image" alt="icon" src={day && `http://openweathermap.org/img/wn/${day.daily[4].weather[0].icon}@2x.png`} />
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <h4 className="card-text">{day && new Date(day.daily[5].dt * 1000).toLocaleDateString("en-US")}</h4>
                        <p>Morning: {day && Math.round(day.daily[5].temp.morn)}°F</p>
                        <p>Day: {day && Math.round(day.daily[5].temp.day)}°F</p>
                        <p>Evening: {day && Math.round(day.daily[5].temp.eve)}°F</p>
                        <p className="card-text">{day && day.daily[5].weather[0].main}</p>
                        <p>Wind: {Math.round(day && day.daily[5].wind_speed)} mph</p>
                        <img className="image" alt="icon" src={day && `http://openweathermap.org/img/wn/${day.daily[5].weather[0].icon}@2x.png`} />
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <h4 className="card-text">{day && new Date(day.daily[6].dt * 1000).toLocaleDateString("en-US")}</h4>
                        <p>Morning: {day && Math.round(day.daily[6].temp.morn)}°F</p>
                        <p>Day: {day && Math.round(day.daily[6].temp.day)}°F</p>
                        <p>Evening: {day && Math.round(day.daily[6].temp.eve)}°F</p>
                        <p className="card-text">{day && day.daily[6].weather[0].main}</p>
                        <p>Wind: {Math.round(day && day.daily[6].wind_speed)} mph</p>
                        <img className="image" alt="icon" src={day && `http://openweathermap.org/img/wn/${day.daily[6].weather[0].icon}@2x.png`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast
