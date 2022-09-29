import React from "react";
import './Weather.css';
const Weather = ({data}) => {
    return (
        <div className='container'>
            <div className='top'>
                <div className='location'>
                    <p>{data.name}</p>
                    {data.sys ? <p>{data.sys.country}</p> : null}
                </div>
                <div className='temp'>
                    {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                </div>
                <div className='desc'>
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
            </div>

            <div className='bottom'>
                <div className='feels'>
                    {data.main ? <p>{data.main.feels_like.toFixed()-273}°C</p> : null}
                    <p>Feels Like</p>
                </div>
                <div className='humidity'>
                    {data.main ? <p>{data.main.humidity}%</p> : null}
                    <p>Humidity</p>
                </div>
                <div className='wind'>
                    {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> : null}
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    );
}
export default Weather