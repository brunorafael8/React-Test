'use strict'

import React, { PureComponent } from 'react'
import Header from './App/components/header/Header'
import Main from './Main'
import Loadable from 'react-loadable'
import './css/normalize.css'
import './css/base.css'

class App extends PureComponent {
  render () {
    return (
      <div >
        <Header />
        <Main />
      </div>
    )
  }
}

export default App
