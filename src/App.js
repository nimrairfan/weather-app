import React , {useEffect, useState} from 'react'
import './App.css';
// import dark from './images/night.jpg'
// import day from './images/morning.jpg'
const App = () => {

  const [weatherApi , setWeatherApi] = useState({})
  const [cityName , setCityName] = useState("lahore")
  const [searchCityState , setsearchCityState] = useState("lahore")
  useEffect (()=>{

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&appid=3d3f17e2394d08edbd30f3817f605a66&units=metric`
    )
    .then((res) => res.json())
    .then((results)=>{
      setWeatherApi(results)
    }) 
    .catch((error)=>{
      console.log(error)
    })
  
} ,[searchCityState])

const searchCity = (inc) => {
  setsearchCityState(cityName)
  console.log(cityName)
}

  return (
    <div className="App">
      <div className="weathercon">
        <div className='innerdiv'>
        <input className='cityinput' type="text" value={cityName} placeholder="type Your City" 
          onChange={(inc)=>setCityName(inc.target.value)}/>
          <button onClick={searchCity} className='inputbtn'>Enter</button>
          <li>City:- {weatherApi && weatherApi.name}</li>
          <li>Temp:- {weatherApi && weatherApi.main && weatherApi.main.temp}</li>
          <li>Main:- {weatherApi &&weatherApi.weather && weatherApi.weather[0]&& weatherApi.weather[0].main}</li>
          <li>Timezone:-{weatherApi && weatherApi.timezone}</li>
          </div>
        </div>      
    </div>
  );
// const [weatherData, setWeatherData] = useState({});
// const [cityName, setCityName] = useState("karachi");
// const [searchCityState, setSearchCityState] = useState("karachi");
// useEffect(() => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&appid=3d3f17e2394d08edbd30f3817f605a66&units=metric`
//   )
//     .then((res) => res.json())
//     .then((result) => {
//       setWeatherData(result);
//     })
//     .catch((err) => {
//       console.log("0rrr", err);
//     });
// }, [searchCityState]);

// const searchCity = (e) => {
//   setSearchCityState(cityName);
// };
// return (
//   <div>
//     <h1>WeatherApp</h1>
//     <div
//       className="d-flex justify-content-center my-5"
//       style={{ flexDirection: "column", alignItems: "center" }}
//     >
//       <input
//         type="text"
//         value={cityName}
//         className="form-group form-control w-50"
//         placeholder="Enter City name"
//         onChange={(e) => setCityName(e.target.value)}
//       />
//       <button onClick={searchCity} className="btn btn-info">
//         search
//       </button>
//     </div>
//     {/* <button>CALL API</button> */}
//     <li>CITY: {weatherData && weatherData.name} </li>
//     <li>TEMP: {weatherData && weatherData.main && weatherData.main.temp} </li>
//     <li>
//       Condition:{" "}
//       {weatherData &&
//         weatherData.weather &&
//         weatherData.weather[0] &&
//         weatherData.weather[0].main}
//     </li>
//   </div>
// );
}

export default App;
