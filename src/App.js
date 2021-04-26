import './App.css';
import React, { useState, useEffect } from 'react';

import Forecast from './components/forecast/Forecast.js'
import Search from './components/search/Search.js'
import Weather from './components/weather/Weather.js'
import City from './components/city/City.js';

const api = {
  key: "728bcc2dfead7ea2a3423dfe5d58ca45",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    weatherCityhandler()
  }, [])

  const search = event => {
    if (event.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('');
        });
    }
  }

  const dateBuilder = () => {
    let date = String(new window.Date())
    date = date.slice(3, 15)
    return `${date}`
  }

  const weatherCityhandler = async () => {
    const cities = ["New York", "Los Angeles", "New Mexico", "London"]
    for (let i = 0; i < cities.length; i++) {
      const response = await (await fetch(`${api.base}weather?q=${cities[i]}&units=imperial&APPID=${api.key}`)).json()
      setCityWeather((prevState) => [...prevState, response])
    }
  }

  return (
    <div className={
      (typeof weather.name != "undefined")
        ? ((weather.main.temp > 50)
          ? 'app warm' : 'app')
        : 'app'}>
      <main>
        <Search search={search} query={query} setQuery={setQuery} />

        {(typeof weather.name != "undefined") ? (
          <div>
            <Weather weather={weather} dateBuilder={dateBuilder} />

            <div className="App">
              <Forecast weather={weather} />

              <h1 className="display-5">Weather Forecast in other locations</h1>

              <div className="row justify-content-center">
                {
                  cityWeather.map(city => <City key={city.id} city={city} />)
                }
              </div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
