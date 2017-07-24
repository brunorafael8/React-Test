'use strict'

import React, { PureComponent } from 'react'
import Header from './components/header/Header.js'
import Loadable from 'react-loadable'
import {Link} from 'react-router-dom';
import './css/normalize.css'
import './css/base.css'

function MyLoadingComponent () {
  return <div>Loading...</div>
}

const LoadableComponent = Loadable({
  loader: () => import('./Main'),
  loading: MyLoadingComponent
})
class App extends PureComponent {
  render () {
    return (
      <div>
        <Link style={styles.topoLink} to={`/`}><Header title={'Linkin Park discography'} /></Link>
        <LoadableComponent />
      </div>
    )
  }
}
const styles = {
  topoLink: {
    textDecoration: 'none'
  }
}

export default App
