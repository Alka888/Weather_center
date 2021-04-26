import React from 'react'
import './search.css'

function Search({ search, query, setQuery }) {

    return (
        <div className="search-box">
            <h1>Weather App</h1>
            <input
                type="text"
                className="search-bar"
                placeholder="Search city"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            ></input>
        </div>
    )
}

export default Search
