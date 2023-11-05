import React from 'react';
import '../styles/ChooseEventType.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { InputAdornment } from '@mui/material';
import MyCustomLayout from './MyCustomLayout.js';
import { DateCalendar } from '@mui/x-date-pickers';

function CalendarMonth({handleClosePopUp}) {

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
            <MobileDatePicker
            label="*Date of birth"
            disableUnderline
            slots={{
              layout: MyCustomLayout,
            }}
            slotProps={{
              actionBar: {
                actions: ['today', 'accept', 'cancel'],
              },
            }}
            />
          </LocalizationProvider>
          <button className='add-to-today-popup-button' onClick={handleClosePopUp}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarMonth;
