'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './title.css'

const Title = ({ children }) => (
  <p>{children}</p>
)

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
