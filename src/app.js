import React from 'react'
import { render } from 'react-dom'

const Page1 = () => {
  return (
    <div>
      Page1
    </div>
  )
}

const Page2 = () => {
  return (
    <div>
      Page2
    </div>
  )
}

render(
  <Page1 />,
  document.getElementById('root')
)
