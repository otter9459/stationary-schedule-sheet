import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DayOfWeeks from "./DayOfWeeks";
import Dates from "./Dates";


import { useState } from "react";
import { initialState } from "../reducers/initialState";

function Calendar() {
  const state = useSelector(state => state.calendarReducer);
  const { people, schedule, today} = state;
  const dispatch = useDispatch()

  const [ curDay, setCurDay ] = useState(initialState.today)

  const prevMonth = () => {
    let now = curDay[0].slice(0, 8)
    let test = curDay[0].slice(-1)-1
    setCurDay([now + test])
  }
  console.log(curDay)
  return (
    <div className="calendar-wraper">
      <div className="calendar-header-wraper">
        <div className="calendar-month-view">
          <span onClick={prevMonth} >{'<'}</span>{curDay}<span>{'>'}</span>
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