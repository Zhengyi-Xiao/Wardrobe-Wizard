import React from 'react';
import '../styles/HomePage.css';
import { workout, collapse } from '../styles/icons.js';
function HomePage() {
  return (
    <div className='home-page-container'>
      <div className='weather'></div>
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