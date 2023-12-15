import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import CalendarMonth from "./CalendarMonth.js";
import CalendarWeek from "./CalendarWeek.js";
import { IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import dayjs from "dayjs";
import MyOutFit from "./MyOutFit.js";
import { weatherAPIiKey, getWeatherAPI, getWeatherForDateAPI } from '../api/api.js'

function HomePage() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [temp, setTemp] = useState(null);
  const [weatherIconUrl, setWeatherIconUrl] = useState(null);

  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleOpenCalendar = () => {
    setOpenCalendar(true);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setOpenCalendar(false);
  };

  // console.log(currentDate.subtract(1, 'day').unix())
  const getWeather = async () => {
    const res1 = await getWeatherAPI();
    return res1;
  };

  const getWeatherForDate = async (date) => {
    const res1 = await getWeatherForDateAPI(date.unix());
    return res1;
  };

  useEffect(() => {
    try {
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
          const temperature = response?.main?.temp;
          const weatherIconCode = response?.weather[0]?.icon;
          const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
          setTemp(temperature);
          setWeatherIconUrl(weatherIconUrl);
        });
      }
    } catch (error) {
      setTemp(-1);
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
