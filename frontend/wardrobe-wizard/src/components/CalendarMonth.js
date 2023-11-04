import React from 'react';
import '../styles/ChooseEventType.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { InputAdornment } from '@mui/material';
import MyCustomLayout from './MyCustomLayout.js';

function CalendarMonth({handleClosePopUp}) {

  return (
    <div className='add-to-today-popup'>
      <div className='add-to-today-popup-content'>
        <div className='add-to-today-popup-action-buttons'>
          {/* <button className='add-to-today-popup-button' onClick={handleAddToOutfit}>
            Confirm
          </button> */}
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
            // sx={{
            //   width: "100%",
            //   "& .MuiInputLabel-root.Mui-focused": { color: "#979797" }, //styles the label
            //   "& .MuiOutlinedInput-root": {
            //   "&:hover > fieldset": { borderColor: "#C7C8CD" },
            //   height: "48px",
            //   borderRadius: "6px",
            //   },
            // }}
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
