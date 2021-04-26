import React from 'react';
import './city.css';

const City = ({ city }) => {

    return (
        <div className="col-sm-3">
            <div className="card">
                <h3 className="card-title">{city.name}</h3>
                <h2 className="text-mut">{Math.round(city.main.temp)}°F</h2>
                <div className="card-body">
                    <p className="card-text">{city.weather[0].main}</p>
                    <p>Wind: {Math.round(city.wind.speed)} mph</p>
                    <img alt="icon" src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} />
                </div>
            </div>
        </div>
    )
}

export default City;