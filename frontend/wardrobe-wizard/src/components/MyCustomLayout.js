import React, { useState, useRef } from 'react';
import {
  usePickerLayout,
  PickersLayoutRoot,
  pickersLayoutClasses,
  PickersLayoutContentWrapper,
} from '@mui/x-date-pickers/PickersLayout';
import { DateField } from '@mui/x-date-pickers';

function MyCustomLayout(props) {
  const [value, setValue] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);
  const customizedDate = useRef(value);
  const [, setNewDate] = useState(value);
  const { toolbar, content, actionBar } = usePickerLayout(props);
  // console.log(NewDate)
  return (
    <PickersLayoutRoot
    className={pickersLayoutClasses.root}
    ownerState={props}
    sx={{
      [`.${pickersLayoutClasses.toolbar}`]: {
      color: "white",
      backgroundColor: "#FEAD91",
      // borderRadius: '9px 9px 0 0',
      "& .MuiTypography-root ": {
        color: "white",
      },
      },
      [`.${pickersLayoutClasses.actionBar}`]: {
        backgroundColor: "#FFFCFB",
        borderRadius: '0 0 9px 9px',
      "& .MuiButton-text ": {
        color: "#FEAD91",
        // borderColor: "#96A9AF",
        // F95D44
      },
      },
      [`.${pickersLayoutClasses.contentWrapper}`]: {
      "& .Mui-selected": {
        backgroundColor: "#96A9AF",
        color: "white",
      },
      "& .Mui-selected:hover": {
        backgroundColor: "#96A9AF",
        color: "white",
      },
      "& .Mui-selected:focus": {
        backgroundColor: "#96A9AF",
        color: "white",
      },
      },
    }}
    >
    {/* {toolbar} */}
    <PickersLayoutContentWrapper
      className={pickersLayoutClasses.contentWrapper}
    >
      {showCalendar ? (
      content
      ) : (
      <DateField
        value={value}
        autoFocus
        onChange={(e) => {
        setNewDate(e);
        customizedDate.current = e;
        }}
        variant="standard"
        label="Enter date"
        sx={{
        mx: 4,
        mt: 4,
        width: "150px",
        minWidth: "100%",
        "& .MuiInputLabel-root.Mui-focused": { color: "#F95D44" }, //styles the label
        "& .MuiInput-underline:after": {
          borderBottomColor: "#F95D44",
        },
        }}
      />
      )}
    </PickersLayoutContentWrapper>
    {actionBar}
    </PickersLayoutRoot>
 );
}

export default MyCustomLayout;