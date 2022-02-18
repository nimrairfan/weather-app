import React , {useEffect, useState} from 'react'
import './App.css';
// import dark from './images/night.jpg'
// import day from './images/morning.jpg'
const App = () => {

  const [weatherApi , setWeatherApi] = useState({})
  const [cityName , setCityName] = useState("karachi")
  const [cityInput , setCityInput] = useState("karachi")
  useEffect (()=>{

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=3d3f17e2394d08edbd30f3817f605a66&unitsmetric`
    )
    .then((res) => res.json())
    .then((results)=>{
      setWeatherApi(results)
    }) 
    .catch((error)=>{
      console.log(error)
    })
  
} ,[cityName])

const citytype = (inc) => {
  setCityInput(cityName)
}

  return (
    <div className="App">
      <div className="weathercon">
        <div className='innerdiv'>
        <input className='cityinput' type="text" value={cityName} placeholder="type Your City" 
          onChange={(inc)=>setCityName(inc.target.value)}/>
          <button onClick={citytype} className='inputbtn'>Enter</button>
          <li>City:- {weatherApi && weatherApi.name}</li>
          <li>Temp:- {weatherApi && weatherApi.main && weatherApi.main.temp}</li>
          <li>Main:- {weatherApi &&weatherApi.weather && weatherApi.weather[0]&& weatherApi.weather[0].main}</li>
          <li>Timezone:-{weatherApi && weatherApi.timezone}</li>
          </div>
        </div>      
    </div>
  );
}

export default App;
