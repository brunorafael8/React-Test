import React from 'react'
import PropTypes from 'prop-types'
import EpsApi from 'src/data'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
const Details = (props) => {
  const details = EpsApi.get(
    parseInt(props.match.params.id, 0)
  )
  return (
    <Item>
      <Link to='/'>Back</Link>
      <ItemImg src={details.url} alt="img"/>
      <h1 style={styles.detailsTitle}>{details.title}</h1><span>{details.released}</span>
      <p style={styles.detailsDcpt}>{details.description}</p>
    </Item>
  )
}
const Item = styled.div`
    margin-top: 10px;
    display: flex;
    justify-Content: center;
    flex-Direction: column;
    text-Align: center;
    align-items: center;
`;
const ItemImg = styled.img`
  height: 100%;
  width: 100%;

  @media(min-width: 550px) {
    height: 50%;
    width: 50%;
  }
`;
const styles = {
  detailsIMG:{  
    height: '50%',
    width: '50%'
  }
}

export default Details
