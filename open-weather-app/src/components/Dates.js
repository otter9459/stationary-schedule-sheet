import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Dates() {
  const state = useSelector(state => state.calendarReducer);
  const { people, schedule, today, firstDayOfMonth} = state;
  const dispatch = useDispatch();
  // firstDayOfMonth의 'd'에는 이번달의 첫 시작 날짜와 요일이 담겨있다.
  // firstDateOfMonth에는 첫 시작 날짜의 요일이 0~6으로 담긴다.
  console.log(firstDayOfMonth)

  // useEffect(() => {
  //   if()
  //   dispatch()
  // }, [today])

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

    

    // datesArr의 빈문자열의 갯수를 파악한다.
    // 7에서 빈 문자열의 갯수만큼 뺀다.
    // 결과를 datesArr 앞에 추가한다. 

    
    for(let i=1; datesArr.length<35; i++) {
      if(i<=max) {
        datesArr.push(i)
      } else {
        datesArr.push('')
      }
    }
    return datesArr
  }

  let curDate = makeDate()
  
  return (
    <div className="calendar-date-wraper">
      {makeDate().map((date) => 
        <span className="calendar-date">{date}</span>
      )}
    </div>
  )
}

export default Dates;