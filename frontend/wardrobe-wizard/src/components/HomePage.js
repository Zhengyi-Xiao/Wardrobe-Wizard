import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import CalendarMonth from "./CalendarMonth.js";
import CalendarWeek from "./CalendarWeek.js";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import dayjs from "dayjs";
import MyOutFit from "./MyOutFit.js";

function HomePage(eventTypes) {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [temp, setTemp] = useState(null);
  const [weatherName, setWeatherName] = useState(null);
  const [weatherIconUrl, setWeatherIconUrl] = useState(null);

  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // add apiKey here
  const apiKey = "b24c1096033e1df3773df155f7d64400"

  const handleOpenCalendar = () => {
    setOpenCalendar(true);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setOpenCalendar(false);
  };

  // console.log(currentDate.subtract(1, 'day').unix())
  const getWeather = async () => {
    const location = `http://pro.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=${apiKey}`;
    const res = await fetch(location);
    const res1 = res.json();
    return res1;
  };

  const getWeatherForDate = async (date) => {
    const dateCode = date.unix();
    const location = `https://history.openweathermap.org/data/2.5/history/city?q=Philadelphia&appid=${apiKey}&units=imperial&dt=${dateCode}`;
    console.log(location)
    const res = await fetch(location);
    const res1 = res.json();
    return res1;
  };

  // useEffect(() => {
  //   getWeather().then(async (response) => {
  //     const temperature = response.main.temp;
  //     const weatherIconCode = response.weather[0].icon;
  //     const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
  //     setTemp(temperature);
  //     setWeatherIconUrl(weatherIconUrl);
  //   });
  // }, [selectedDate]);

  useEffect(() => {
    if (selectedDate.isSame(dayjs(), 'day') || selectedDate.isAfter(dayjs(), 'day')) {
      // Fetch current weather when selectedDate is the current date
      getWeather().then(async (response) => {
        const temperature = response?.main?.temp;
        const weatherIconCode = response?.weather[0]?.icon;
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
        setTemp(temperature);
        setWeatherIconUrl(weatherIconUrl);
      });
    } else {
      // Fetch weather for a specific date (e.g., yesterday)
      getWeatherForDate(selectedDate).then(async (response) => {
        // Process the response for the specific date
        const temperature = response.list[0].main.temp;
        const weatherIconCode = response.list[0].weather[0].icon;
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
        setTemp(temperature);
        setWeatherIconUrl(weatherIconUrl);
      });
    }
  }, [selectedDate]);

  return (
    <div className="home-page-container">
      <div className="weather">
        <div>
          <IconButton className="calendarIcon" onClick={handleOpenCalendar}>
            <CalendarMonthIcon fontSize="large" />
          </IconButton>
          {openCalendar && (
            <CalendarMonth
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />
          )}
        </div>
        <div className="weatherDateInfo">
          <div className="dateInfo">{selectedDate.format("D MMM, YYYY")}</div>
          <div className="weatherInfo">
            <div className="temperature">{Math.round(temp)}°F</div>
            {/* <div className='seperator'></div> */}
            {weatherIconUrl && (
              <img
                src={weatherIconUrl}
                alt="Weather Icon"
                className="weatherIcon"
              />
            )}
          </div>
        </div>
      </div>
      {openCalendar ? (
        <CalendarWeek
          selectedDate={selectedDate}
          clickWeekChange={setSelectedDate}
        />
      ) : (
        <CalendarWeek
          selectedDate={selectedDate}
          clickWeekChange={setSelectedDate}
        />
      )}
      <MyOutFit selectedDate={selectedDate} />
    </div>
  );
}

export default HomePage;
