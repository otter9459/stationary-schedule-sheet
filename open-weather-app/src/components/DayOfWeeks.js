import React from "react";

function DayOfWeeks() {
  const days = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="dayOfWeeks-days">
      {days.map((day) => 
        <span className="dayOfWeeks-day">{day}</span>
      )}
    </div>
  )
}

export default DayOfWeeks;