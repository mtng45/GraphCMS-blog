import { connect } from 'react-redux'
import EventCalendar from './event-calendar'
import rootReducer from '../../../redux/reducer'

const Calendar = rootReducer

export default connect(Calendar => Calendar)(EventCalendar)
