/**
 * HOMEモジュール
 */
import axios from 'axios'
import { Const } from '../../..'

const { API } = Const

// action
const HOME_UPDATE = '/oneday/home'

const initState = {
  homeInfo: {}
}

// reducer
export default (state = initState, action) => {
  switch(action.type) {
    default:
      state
  }
}

/**
 * API取得
 */
export const fetchHomeInfo = () => (getState, dispatch) => {
  const api = axiox(API.ENDPOINTS.Simple, {
    // TODO: GraphCMSにクエリを投げる
  })
}

// action creator
