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

  const handleOpenCalendar = () => {
    setOpenCalendar(true);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setOpenCalendar(false);
  };

  const getWeather = async () => {
    const location = `http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=4d01dbe80c384ea20a6937f2aa98848d&units=imperial`;
    const res = await fetch(location);
    const res1 = res.json();
    return res1;
  };

  useEffect(() => {
    getWeather().then(async (response) => {
      const temperature = response.main.temp;
      const weatherIconCode = response.weather[0].icon;
      const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
      setTemp(temperature);
      setWeatherIconUrl(weatherIconUrl);
    });
  }, [selectedDate]);
  // useEffect(() => {}, []);
  // console.log(
  //   "current selected date",
  //   selectedDate.$y +
  //     "" +
  //     (selectedDate.$M + 1 < 10
  //       ? "0" + (selectedDate.$M + 1)
  //       : selectedDate.$M + 1) +
  //     "" +
  //     (selectedDate.$D < 10
  //       ? "0" + (selectedDate.$D)
  //       : selectedDate.$D)
  // );

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
