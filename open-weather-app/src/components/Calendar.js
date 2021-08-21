import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DayOfWeeks from "./DayOfWeeks";
import Dates from "./Dates";
import { moveToNextMonth, moveToPrevMonth } from "../actions";

function Calendar() {
  const state = useSelector(state => state.calendarReducer);
  const { people, schedule, today} = state;
  const dispatch = useDispatch()

  const prevMonth = () => {
    dispatch(moveToPrevMonth(today))
  }

  const nextMonth = () => {
    dispatch(moveToNextMonth(today))
  }
  
  return (
    <div className="calendar-wraper">
      <div className="calendar-header-wraper">
        <div className="calendar-month-view">
          <span onClick={prevMonth}>{'<'}</span>{today}<span onClick={nextMonth}>{'>'}</span>
        </div>
      </div>
      <div className="calendar-body-wraper">
        <DayOfWeeks className="calendar-day-of-weeks" />
        <div className="calendar-dates">
          <Dates />
        </div>
      </div>
    </div>
  )
};

export default Calendar;