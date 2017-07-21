import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Header from './components/header/Header'
import List from './components/list/List'

class Home extends PureComponent {
  
  render() {
    return(
      <div>
        <Header />
        <List/>
      </div>
    )
  }
}
export default Home
