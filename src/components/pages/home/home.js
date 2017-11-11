import React, { Component } from 'react'

export default class Home extends Component {
  componentDidMount () {
    console.log('---componentDidMount---')
    console.dir(this.props)
    this.props.actions.fetchHomeInfo()
  }
  render () {
    return (
      <div>
        Homes
      </div>
    )
  }
}
