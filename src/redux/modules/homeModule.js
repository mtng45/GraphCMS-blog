/**
 * HOMEモジュール
 */
import axios from 'axios'
import { API } from '../../const'

// action
export const UPDATE_HOME = '/oneday/home'

const initState = {
  homeInfo: {}
}

// reducer
export default (state = initState, action) => {
  console.log(action)
  switch(action.type) {
    case UPDATE_HOME:
      const state = { ...state, homeInfo: action.payload }
      return state
    default:
      return initState
  }
}

/**
 * API取得
 */
export const fetchHomeInfo = () => async (getState, dispatch) => {
    const data = await axios(API.ENDPOINTS.Simple, {
      // TODO: GraphCMSにクエリを投げる
    }) 
    return dispatch(updateHome(data))
}

// action creator
export const updateHome = (data) => {
  return {
    type: UPDATE_HOME,
    payload: data
  }
}
