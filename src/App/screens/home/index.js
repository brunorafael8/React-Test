import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import List from './components/list/List'

class Home extends PureComponent {
  
  render() {
    return(
      <div>
        <List/>
      </div>
    )
  }
}
export default Home
