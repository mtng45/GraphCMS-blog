import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Header = () => (
  <div>
    <p>Header</p>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/memo">Memo</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </div>
);

const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

const Memo = () => {
  return (
    <div>
      Memo
    </div>
  )
}

const Profile = () => {
  return (
    <div>
      Profile
    </div>
  )
}

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/memo" component={Memo} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  )
}

render(
  <Root />,
  document.getElementById('root')
)
