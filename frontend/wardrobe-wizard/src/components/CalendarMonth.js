import React, {useState, useEffect} from 'react';
import '../styles/ChooseEventType.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers';
import MyCustomLayout from './MyCustomLayout.js';

function CalendarMonth({ selectedDate, handleDateChange}) {  
  const [currentSelectedDate, setCurrentSelectedDate] = useState(selectedDate);
  
  // const handleOkClick = () => {
  //   // const formattedSelectedDate = selectedDate.format('D MMM, YYYY');
  //   handleDateChange(currentSelectedDate);
  // };

  useEffect(() => {
    setCurrentSelectedDate(selectedDate);
  }, [selectedDate]);

  return (
    <div className='add-to-today-popup'>
      <div className='add-to-today-popup-content'>
        <div className='add-to-today-popup-action-buttons'>
          <LocalizationProvider 
          dateAdapter={AdapterDayjs}
          >
            <StaticDatePicker
            value={currentSelectedDate} 
            onChange={(newValue) => {
              setCurrentSelectedDate(newValue)
              handleDateChange(newValue);
            }}
            slots={{
              layout: MyCustomLayout,
            }}
            slotProps={{
              actionBar: {
                // actions: ['today', 'accept', 'cancel'],
                actions: ['today'],
              },
            }}
            />
          </LocalizationProvider>
          {/* <button className='add-to-today-popup-button' onClick={handleOkClick}>
            OK
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default CalendarMonth;
