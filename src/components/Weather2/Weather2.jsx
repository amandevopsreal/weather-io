import React from "react";

const Weather2 = ({ data }) => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div class="card text-white text-center border-0">

                            <div class="card-img-overlay">
                                <div className="bg-dark bg-opacity-50 py-3">
                                    <h2 className="card-title">{data.name}</h2>
                                    {data.sys ? <p className="card-text lead">{data.sys.country}</p> : null}
                                    <hr />

                                    {data.main ? <div><img
                                        className=""
                                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                        alt={data.weather[0].description}
                                    /><h1 className="fw-bolder mb-5">{Math.round(data.main.feels_like.toFixed() - 273.15)}°C</h1></div> : null}
                                    {data.weather ? <p className="fw-bolder mb-0 lead">{data.weather[0].main}</p> : null}
                                    {data.main ? <p className="fw-bolder mb-0 lead mt-2">{data.main.humidity}%</p> : null}
                                    <p>Humidity</p>
                                    {data.wind ? <p className="fw-bolder mb-0 lead">{Math.round(data.wind.speed.toFixed() * 1.609)
                                    }KMPH</p> : null}
                                    <p>Wind Speed</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Weather2;