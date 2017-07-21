'use strict'

import React, { PureComponent } from 'react'
import Home from './App/screens/home/index.js'
import './css/normalize.css'
import './css/base.css'
class App extends PureComponent {
  render () {
    return (
      <div>
        <Home />
        <h1>Bem Vindo !!</h1>
      </div>
    )
  }
}

export default App
