import React from 'react'
import PropTypes from 'prop-types'

const Header = () => (
  <div style={styles.header}>
      <h1 style={styles.nav__title}></h1>
  </div>
)
const styles = {
  header: {
    backgroundColor: '#d50000',
    display: 'flex',
    justifyContent: 'center'
  },
  nav__title: {
    color: '#FFF'
  }
}

export default Header
