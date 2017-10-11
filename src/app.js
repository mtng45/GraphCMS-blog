import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import RouterBox from './router'

render(
  <Provider store={store}>
    <RouterBox />
  </Provider>,
  document.getElementById('root')
)
