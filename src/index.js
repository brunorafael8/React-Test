'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'
import {BrowserRouter} from 'react-router-dom'

const renderApp = (NextApp) => {
  render(
    <BrowserRouter>
      <AppContainer>
        <NextApp />
      </AppContainer>
    </BrowserRouter>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
