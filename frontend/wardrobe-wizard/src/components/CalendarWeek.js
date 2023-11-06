import React from 'react';
import classes from '../styles/CalendarWeek.module.css';

function CalendarWeek() {

  return (
    <div>
      <div className={classes.frame10231}>
        <div className={classes.background}>
          <div className={classes.frame2608151}>
            <div className={classes.dayGroup}>
              <div className={classes.titleDay}>
                <div className={classes.weekName}>MON</div>
              </div>
              <div className={classes.dateDefaultRegular}>
                <div className={classes.weekNum}>6</div>
              </div>
            </div>
            <div className={classes.dayGroup}>
              <div className={classes.titleDay}>
                <div className={classes.weekName}>TUE</div>
              </div>
              <div className={classes.dateDefaultRegular}>
                <div className={classes.rectangle}></div>
                <div className={classes.weekNum}>7</div>
              </div>
            </div>
            <div className={classes.dayGroup}>
              <div className={classes.titleDay}>
                <div className={classes.weekName}>WED</div>
              </div>
              <div className={classes.dateDefaultRegular}>
                <div className={classes.weekNum}>8</div>
              </div>
            </div>
            <div className={classes.dayGroup}>
              <div className={classes.titleDay}>
                <div className={classes.weekNameCenter}>THU</div>
              </div>
              <div className={classes.dateDefaultCenter}>
                <div className={classes.weekNumCenter}>9</div>
              </div>
            </div>
            <div className={classes.dayGroup}>
              <div className={classes.titleDay}>
                <div className={classes.weekName}>FRI</div>
              </div>
              <div className={classes.dateDefaultRegular}>
                <div className={classes.rectangle}></div>
                <div className={classes.weekNum}>10</div>
              </div>
            </div>
            <div className={classes.dayGroup}>
              <div className={classes.titleDay}>
                <div className={classes.weekName}>SAT</div>
              </div>
              <div className={classes.dateDefaultRegular}>
                <div className={classes.weekNum}>11</div>
              </div>
            </div>
            <div className={classes.dayGroup}>
              <div className={classes.titleDay}>
                <div className={classes.weekName}>SUN</div>
              </div>
              <div className={classes.dateDefaultRegular}>
                <div className={classes.weekNum}>12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarWeek;
