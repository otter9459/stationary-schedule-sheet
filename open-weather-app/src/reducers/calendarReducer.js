import { MOVE_TO_NEXT_MONTH, MOVE_TO_PREV_MONTH } from "../actions";
import { initialState } from "./initialState";

const calendarReducer = (state = initialState, action) => {

  switch (action.type) {
    case MOVE_TO_PREV_MONTH:
      let newMonth = action.payload.today[0].slice(0, 7)
      let prevMonth = action.payload.today[0].slice(-2)-1
      console.log(newMonth.slice(0, 4))

      if(prevMonth === 0) {
        newMonth = newMonth.slice(0, 4)-1 + ' - '
        prevMonth = 12;
      } else if(prevMonth < 10) {
        prevMonth = '0' + String(prevMonth)
      }
      
      newMonth = newMonth + String(prevMonth)

      return Object.assign({}, state, {
        today: [newMonth]
      })

    case MOVE_TO_NEXT_MONTH:
      let newMonth2 = action.payload.today[0].slice(0, 7)
      let nextMonth = Number(action.payload.today[0].slice(-2))+1

      if(nextMonth === 13) {
        newMonth2 = Number(newMonth2.slice(0, 4))+1 + ' - '
        nextMonth = '01';
      } else if(nextMonth < 10) {
        nextMonth = '0' + String(nextMonth)
      }
      
      newMonth2 = newMonth2 + String(nextMonth)

      return Object.assign({}, state, {
        today: [newMonth2]
      })

    default: return state;
  }
}

export default calendarReducer;