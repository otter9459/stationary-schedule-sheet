import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Dates() {
  const state = useSelector(state => state.calendarReducer);
  const { people, schedule, today} = state;

  const makeDate = () => {
    let datesArr = []
    let month = today[0].slice(-2)
    let max

    if(month === '02') {
      max = 28
    } else if(month === '04' || month === '06' || month === '09' || month === '11') {
      max = 30
    } else {
      max = 31
    }
    for(let i=1; i<=35; i++) {
      if(i<=max) {
        datesArr.push(i)
      } else {
        datesArr.push('')
      }
    }
    return datesArr
  }
  
  return (
    <div className="calendar-date-wraper">
      {makeDate().map((date) => 
        <span className="calendar-date">{date}</span>
      )}
    </div>
  )
}

export default Dates;