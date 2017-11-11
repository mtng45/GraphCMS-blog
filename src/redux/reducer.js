import { combineReducers } from 'redux'
import Modules from './modules'

const { homeModule, Calendar } = Modules

const rootReducer = combineReducers({
  homeModule: homeModule.default,
  Calendar: Calendar.default
})

export default rootReducer
