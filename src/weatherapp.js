import { Oval } from 'react-loader-spinner';
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './weather.css'
 
export default function WeatherApp() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({
        loading: false,
        data: {},
        error: false,
    });

    const toDateFunction = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const WeekDays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const currentDate = new Date();
        const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
            }`;
        return date;
    };

    const search = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInput('');
            setWeather({ ...weather, loading: true });
            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
            await axios
                .get(url, {
                    params: {
                        q: input,
                        units: 'metric',
                        appid: api_key,
                    },
                })
                .then((res) => {
                    console.log('res', res);
                    setWeather({ data: res.data, loading: false, error: false });
                })
                .catch((error) => {
                    setWeather({ ...weather, data: {}, error: true });
                    setInput('');
                    console.log('error', error);
                });
        }
    };
    return (
        <section className='weatherapp'>
            <header className='p-1 header1  bg-white text-center'>
                <i className="bi bi-cloud fs-1"></i>  Weather Wizard
            </header>
            <div className="search-bar m-5">
                <input
                    type="text"
                    className="city-search form-control bg-white"
                    placeholder="Search Country.."
                    name="query"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyPress={search}
                />
            </div>
            <div className=' '>
                <div className='container'>
                    <div className='row'>
                        {weather.loading && (
                            <>
                                <br />
                                <br />
                                <Oval type="Oval" color="black" height={100} width={100} />
                            </>
                        )}
                        {weather.error && (
                            <>
                                <br />
                                <br />
                                <span className="error-message">
                                    <FontAwesomeIcon icon={faFrown} />
                                    <span style={{ fontSize: '20px' }}>Country not found</span>
                                </span>
                            </>
                        )}

                        {weather && weather.data && weather.data.main && (
                            <div className='text-center'>
                                <div className="city-name">
                                    <h2 className='header2'>
                                        {weather.data.name}, <span className='span-text'>{weather.data.sys.country}</span>
                                    </h2>
                                </div>
                                <div className="date fs-5 text-white">
                                    <span>{toDateFunction()}</span>
                                </div>
                                <div className="icon-temp">
                                    <img
                                        className="img-fluid clouds"
                                        src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                                        alt={weather.data.weather[0].description}
                                    />
                                   <h1 className='temp'>{Math.round(weather.data.main.temp)}   <sup className="deg">°C</sup></h1> 
                                  
                                </div>
        
                            </div>
                        )}


                    </div>

                </div>
            </div>

        </section >
    )
}