import React, { useState } from 'react';
import '../styles/HomePage.css';
import { workout, collapse, calendar, weather} from '../styles/icons.js';
import CalendarMonth from './CalendarMonth.js';

function HomePage(eventTypes) {
  const [openCalendar, setOpenCalendar] = useState(false);
  const handleClickCalendar = () => {
    setOpenCalendar(!openCalendar);
  }

  return (
    <div className='home-page-container'>
      <div className='weather'>
          <div>
            <button className='calendarIcon' onClick={handleClickCalendar}>
              {calendar}
            </button>
            {openCalendar && <CalendarMonth handleClosePopUp={handleClickCalendar}/>}
          </div>
          <div className='weatherDateInfo'>
            <div className='dateInfo'>9 Oct, 2023</div>
            <div className='weatherInfo'>
              <div className='temperature'>65°F</div>
              <div className='seperator'></div>
              <div className='weatherIcon'>
                {weather}
              </div>
            </div>
          </div>
      </div>
      <div className='bar-calendar-container'>
        <div className='bar-calendar'></div>
      </div>
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