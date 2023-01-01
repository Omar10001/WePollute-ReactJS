import './App.css';
import { useState } from 'react';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL , WEATHER_API_KEY } from './api';
import Forecast from './components/forecast/forecast';
import AirPollution from './components/Pollute/pollution'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);
  const [airPollution, setAirPollution] = useState(null);  // Add state variable to store air pollution data


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const airPolluteFetch = fetch(`${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

    Promise.all([currentWeatherFetch, forecastFetch, airPolluteFetch])
      .then(async(response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        const airPolluteResponse = await response[2].json();

        setCurrentWeather({ city: searchData.label , ...weatherResponse});
        setforecast({ city: searchData.label , ...forecastResponse});
        setAirPollution({ city: searchData.label , ...airPolluteResponse});
      })
      .catch((err)=> console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);
  console.log(airPollution);  // Log air pollution data

  return (
    <div className=" App mt-20 px-2.5 w-full flex flex-col">
      <div className='animate__animated animate__fadeInDown mb-10'>
        <span className='text-4xl font-semibold'>Weather App </span>
        <span className='text-4xl font-semibold text-blue-600 tracking-tighter hover:tracking-wide transition-all duration-300'>ReactJS</span>
      </div>
      <Search onSearchChange= {handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {airPollution && <AirPollution data={airPollution} />}
      {forecast && <Forecast data={forecast} />}
      <br/>
      <br/>
      <br/>
      <div className='flex mx-auto justify-around w-full'>
        <a href='https://www.instagram.com/omaraldulymi/'>
          <img src='https://i.ibb.co/V99GmJh/6636566-instagram-social-media-social-network-icon.png' alt='instagram' className='w-8 md:w-6 animate__animated animate__bounceInLeft' />
        </a>
        <a href='https://github.com/Omar10001/'>
          <img src='https://i.ibb.co/SJqs7KV/1298743-github-git-logo-social-icon.png' alt='instagram' className='w-8 md:w-6 animate__animated animate__bounceInRight mr-0 md:mr-4' />
        </a>  
      </div>
      <br/>
      <br/>
      <br/>
      
    </div>
  );
}

export default App;
