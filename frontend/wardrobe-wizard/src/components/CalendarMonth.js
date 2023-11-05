import React, {useState} from 'react';
import '../styles/ChooseEventType.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker, StaticDatePicker } from '@mui/x-date-pickers';
import MyCustomLayout from './MyCustomLayout.js';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from "dayjs";

function CalendarMonth({handleDateChange}) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthIndex = currentDate.getMonth();
  const month = monthNames[monthIndex];
  const year = currentDate.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;
  
  const [selectedDate, setSelectedDate] = useState(dayjs(formattedDate));
  console.log(selectedDate['$d'])
  
  const handleOkClick = () => {
    // Call the function from props to transfer the selected date back to the homepage
    const selectedDay = selectedDate['$D']
    const selectedYr = selectedDate['$y']
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const selectedMon = monthNames[selectedDate['$M']];
    const formattedSelectedDate = `${selectedDay} ${selectedMon}, ${selectedYr}`;
    handleDateChange(formattedSelectedDate);
  };

  return (
    <div className='add-to-today-popup'>
      <div className='add-to-today-popup-content'>
        <div className='add-to-today-popup-action-buttons'>
          <LocalizationProvider 
          dateAdapter={AdapterDayjs}
          >
            <StaticDatePicker
            value={selectedDate} 
            onChange={(newValue) => setSelectedDate(newValue)}
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
          <button className='add-to-today-popup-button' onClick={handleOkClick}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarMonth;
