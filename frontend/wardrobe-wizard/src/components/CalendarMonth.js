import React, {useState} from 'react';
import '../styles/ChooseEventType.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker, StaticDatePicker } from '@mui/x-date-pickers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { InputAdornment } from '@mui/material';
import MyCustomLayout from './MyCustomLayout.js';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from "dayjs";

function CalendarMonth({handleClosePopUp}) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthIndex = currentDate.getMonth();
  const month = monthNames[monthIndex];
  const year = currentDate.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;
  
  const [Day, setDay] = useState(dayjs(formattedDate));
  // console.log(Day)
  
  return (
    <div className='add-to-today-popup'>
      <div className='add-to-today-popup-content'>
        <div className='add-to-today-popup-action-buttons'>
          <LocalizationProvider 
          dateAdapter={AdapterDayjs}
          >
            {/* <MobileDatePicker
            label="*Date of birth"
            slotProps={{
              textField: {
              InputProps: {
                endAdornment: (
                <InputAdornment
                  sx={{
                  color: "#979797",
                  }}
                  position="end"
                >
                  <CalendarMonthIcon />
                </InputAdornment>
                ),
              },
              },
            }}
            /> */}
            <StaticDatePicker
            // label="*Date of birth"
            // disableUnderline
            value={Day} 
            onChange={(newValue) => setDay(newValue)}
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
          <button className='add-to-today-popup-button' onClick={handleClosePopUp}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarMonth;
