import React, { useState, useEffect } from "react";
import classes from "../styles/CalendarWeek.module.css";
import dayjs from "dayjs";

function CalendarWeek({ selectedDate, clickWeekChange }) {
  const [currentSelectedDate, setCurrentSelectedDate] = useState(selectedDate);
  const [days, setDays] = useState([]); // Initialize days as an empty array
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    // Update the days array whenever selectedDate changes
    const newDays = [];
    for (let i = -3; i <= 3; i++) {
      const currentDate = dayjs(currentSelectedDate);
      const newDate = currentDate.add(i, "day"); // Create a new dayjs instance
      newDays.push(newDate);
    }
    setDays(newDays);
  }, [currentSelectedDate]);

  const handleDateClick = (day) => {
    setCurrentSelectedDate(day); // Update currentSelectedDate
    clickWeekChange(day);
  };

  // Update currentSelectedDate when selectedDate changes
  useEffect(() => {
    setCurrentSelectedDate(selectedDate);
  }, [selectedDate]);

  return (
    <div className={classes.frameWeekBg}>
      <div className={classes.background}>
        <div className={classes.frameWeekFlex}>
          {days.map((day, index) => (
            <div
              key={index}
              className={classes.dayGroup}
              onClick={() => {
                handleDateClick(day);
              }}
            >
              <div className={classes.titleDay}>
                <div
                  className={
                    index === 3 ? classes.weekNameCenter : classes.weekName
                  }
                >
                  {daysOfWeek[day.day()]}
                </div>
              </div>
              <div
                className={
                  index === 3
                    ? classes.dateDefaultCenter
                    : classes.dateDefaultRegular
                }
              >
                <div
                  className={
                    index === 3 ? classes.weekNumCenter : classes.weekNum
                  }
                >
                  {day.date()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarWeek;
