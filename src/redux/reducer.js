import { combineReducers } from 'redux'

import {
  Home,
  Calendar
} from './modules'

const rootReducer = combineReducers({
  Home,
  Calendar
})
console.log('rootReducer')
console.dir(rootReducer)
export default rootReducer
