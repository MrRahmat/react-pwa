import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

import { City, Search } from "./components";
import './App.css';

const App = () => {
    const [ query, setQuery] = useState('');
    const [ weather, setWeather] = useState({});
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query)
            setWeather(data);
            setQuery('');
        }
    }

  return (
    <div className='wrapper'>
        <Search query={query} change={(e) => setQuery(e.target.value)} keyPress={search}/>
        { weather.main && (
            <City data={weather}/>
        )}
    </div>
  )
};

export default App;