import { createStore } from 'redux'
import rootReducer from './reducer'
const store = createStore(rootReducer)
console.log('---store---')
console.dir(store)
console.log('-----------')
export default store
