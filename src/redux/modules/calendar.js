/**
 * イベントカレンダーモジュール
 */
// action
const EVENT_CALENDAR_UPDATE = '/oneday/event'

const initState = {
  eventCalendarInfo: {}
}

// reducer
export default (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

/**
 * APIから取得
 */
export const fetchEventCalendar = () => (getState, dispatch) => {
  console.log('fetchEventClendar')
  dispatch(UPDATE_EVENT_CALENDAR(333))
}

 // action creator
export const UPDATE_EVENT_CALENDAR = (data) => {
  return {
    type: EVENT_CALENDAR_UPDATE,
    payload: data
  }
}
