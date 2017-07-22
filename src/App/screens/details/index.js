import React from 'react'
import PropTypes from 'prop-types'
import EpsApi from 'src/data'
import { Link } from 'react-router-dom'
const Details = (props) => {
  const details = EpsApi.get(
    parseInt(props.match.params.id, 0)
  )
  return (
    <div style={styles.details}>
      <Link to='/'>Back</Link>
      <img style={styles.detailsIMG} src={details.url} alt="img"/>
      <h1 style={styles.detailsTitle}>{details.title}</h1><span>{details.released}</span>
      <p style={styles.detailsDcpt}>{details.description}</p>
    </div>
  )
}
const styles = {
  details:{
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  detailsIMG:{  
    height: '50%',
    width: '50%'
  },
  detailsTitle:{
    
  },
  
}

export default Details
