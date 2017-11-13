import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducer'

const ReduxLogger = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    ReduxLogger,
    ReduxThunk
  )
)

export default store
