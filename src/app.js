'use strict'

import React, { PureComponent } from 'react'
import Header from './App/components/header/Header'
import Loadable from 'react-loadable'
import './css/normalize.css'
import './css/base.css'

function MyLoadingComponent() {
 return <div>Loading...</div>;
}

const LoadableComponent = Loadable({
  loader: () => import('./Main'),
  loading: MyLoadingComponent,  
});
class App extends PureComponent {
  render () {
    return (
      <div >
        <Header />
        <LoadableComponent />
      </div>
    )
  }
}

export default App
