import React from 'react'
import { render } from 'react-dom'
import Router from './router'
console.log('---router---')
console.dir(Router)

const Root = () => {
  return (
     <Router />
  )
}

render(
  <Root />,
  document.getElementById('root')
)
