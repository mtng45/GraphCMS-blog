import React, { Component } from 'react'

export default class EventCalendar extends Component {
  render () {
    console.log('---props---')
    console.dir(this.props)
    console.log('-----------')
    return (
      <div>
        Event Calendar
      </div>
    )
  }
}
