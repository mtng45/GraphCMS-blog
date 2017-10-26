import { connect } from 'react-redux'
import EventCalendar from './event-calendar'
import rootReducer from '../../../redux/reducer'

const Calendar = rootReducer

console.log('---page---')
console.dir(Calendar)
console.log('----------')

export default connect(Calendar => Calendar)(EventCalendar)
