/**
 * イベントカレンダーモジュール
 */
// action
const UPDATE_EVENT_CALENDAR = '/oneday/event'

const initState = {
  eventCalendarInfo: {}
}

// reducer
export default (state = initState, action) => {
  switch (action.type) {
    default:
      return initState
  }
}

/**
 * APIから取得
 */
export const fetchEventCalendar = () => (getState, dispatch) => {
  console.log('fetchEventClendar')
  dispatch(updateEventCalendar(333))
}

 // action creator
export const updateEventCalendar = (data) => {
  return {
    type: UPDATE_EVENT_CALENDAR,
    payload: data
  }
}
