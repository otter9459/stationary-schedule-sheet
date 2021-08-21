// actions type
export const MOVE_TO_PREV_MONTH = "MOVE_TO_PREV_MONTH";
export const MOVE_TO_NEXT_MONTH = "MOVE_TO_NEXT_MONTH";

// actions creator functions

// 현재 today를 받아온다.
export const moveToPrevMonth = (today) => {
  return {
    type: MOVE_TO_PREV_MONTH,
    payload: {
      today
    }
  }
}

export const moveToNextMonth = (today) => {
  return {
    type: MOVE_TO_NEXT_MONTH,
    payload: {
      today
    }
  }
}