import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Home, EventCalendar } from './components/pages'
console.log('---Home---')
console.dir(Home)

const Header = () => (
  <div>
    <p>Header</p>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/event">Event</Link></li>
    </ul>
  </div>
)

const RouterBox = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/event" component={EventCalendar} />
      </div>
    </BrowserRouter>
  )
}

export default RouterBox
