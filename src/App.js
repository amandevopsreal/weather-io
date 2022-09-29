import React, { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import Loc from 'C:/Users/HP/weather-io/src/components/Loc/Loc.js'
import './App.css';
import axios from 'axios';
import Weather2 from './components/Weather2/Weather2';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0557d556f5465a044be8a9d0bbdbd13a`;
  const searchLocation = (e) => {
    if (e.key == "Enter") {
      axios.get(url).then(res => {
        setStatus("weather")
        setData(res.data);
        console.log(res.data);
      })
    }
  }
  const searchLocation2 = () => {
    
      axios.get(url).then(res => {
        setData(res.data);
        console.log(res.data);
      })
    
  }















  return (

    <div>
      <Nav />
      {status == "" ?
        <div>

          <Logo />
          <Loc setloc={setLocation} search={searchLocation} search2={searchLocation2} status={setStatus} />
        </div> :
        <div>
          
          <Loc setloc={setLocation} search={searchLocation} search2={searchLocation2} status={setStatus} />
          <Weather2 data={data} />
        </div>}

    </div>

  );

}



export default App;
