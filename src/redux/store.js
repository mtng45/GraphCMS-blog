import { createStore } from 'redux'
import rootReducer from './reducer'
console.log('store')
const store = createStore(rootReducer)
console.dir(store)
export default store
