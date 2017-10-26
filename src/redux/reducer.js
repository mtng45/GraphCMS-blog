import { combineReducers } from 'redux'
import Calendar from './modules'

const rootReducer = combineReducers({
  Calendar
})
console.log('---rootReducer---')
console.dir(rootReducer)
console.log('--------------')
export default rootReducer
