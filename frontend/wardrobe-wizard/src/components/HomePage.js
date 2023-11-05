import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import { workout, collapse, calendar, weather} from '../styles/icons.js';
import CalendarMonth from './CalendarMonth.js';
import CalendarWeek from './CalendarWeek.js';
import { IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import dayjs from "dayjs";

function HomePage(eventTypes) {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [temp, setTemp] = useState(null);
  const [weatherName, setWeatherName] = useState(null);
  const [weatherIconUrl, setWeatherIconUrl] = useState(null);

  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleOpenCalendar = () => {
    setOpenCalendar(true);
  }
  
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    // Close the CalendarMonth popup
    setOpenCalendar(false);
  };

  const getWeather = async () => {
    const location = `http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=4d01dbe80c384ea20a6937f2aa98848d&units=imperial`
    const res = await fetch(location);
    const res1 = res.json();
    return res1;
  };

  useEffect(() => {
    // Fetch the temperature and update the 'temp' state
    getWeather().then(async(response) => {
      const temperature = response.main.temp;
      // const weather = response.weather[0].main;
      const weatherIconCode = response.weather[0].icon;
      const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`
      setTemp(temperature);
      // setWeatherName(weather);
      setWeatherIconUrl(weatherIconUrl)
      // console.log('Weather:', weather)
    });
  }, []);
  

  return (
    <div className='home-page-container'>
      <div className='weather'>
          <div>
            {/* <button className='calendarIcon' onClick={handleClickCalendar}>
              {calendar}
            </button> */}
            <IconButton className='calendarIcon' onClick={handleOpenCalendar}>
              <CalendarMonthIcon />
            </IconButton>
            {openCalendar && 
            <CalendarMonth 
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />}
          </div>
          <div className='weatherDateInfo'>
            <div className='dateInfo'>{selectedDate.format('D MMM, YYYY')}</div>
            <div className='weatherInfo'>
              <div className='temperature'>{Math.round(temp)}°F</div>
              <div className='seperator'></div>
              {weatherIconUrl && (
                <img src={weatherIconUrl} alt='Weather Icon' className='weatherIcon' />
              )}
              {/* <div className='weatherIcon'>
                {weather}
                {weatherName}
              </div> */}
            </div>
          </div>
      </div>
      <CalendarWeek/>
      {/* <div className='bar-calendar-container'>
        <div className='bar-calendar'>
          <CalendarWeek/>
        </div>
      </div> */}
      <div className='my-outfit'>
        <p className='outfit-title'>My Outfit</p>
        <div className='todays-outfit-container'>
          <div className='outfit-option'>
            <div className='outfit-option-header'>
              {workout}
              <p className='outfit-option-title'>Workout</p>
              {collapse}
            </div>
            <div className='outfit-option-clothes'>
              <div className='outfit-option-clothes-container'>
                <div className='outfit-option-clothes-item'></div>
                <div className='outfit-option-clothes-item'></div>
                <div className='outfit-option-clothes-item'></div>
              </div>
            </div>
          </div>
          <button className='add-activity-button'>+ Add Activity</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage