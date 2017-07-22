import React from 'react'
import EpsApi from 'src/data'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Details = (props) => {
  const details = EpsApi.get(
    parseInt(props.match.params.id, 0)
  )
  return (
    <div>
      <Divx> 
        <Link to='/'>
          <svg width="20px" height="20px" viewBox="0 0 1000 1000">
            <path d="M849.9,990L990,849.9L639.9,499.9L990,150L849.9,10L499.9,359.9L150,10L10,150l349.9,349.9L10,849.9L150,990l349.9-350.1L849.9,990z"/>
          </svg>
        </Link>
      </Divx>
      <Item>
        <ItemImg src={details.url} alt="img"/>
        <h1>{details.title}</h1><span>{details.released}</span>
        <p>{details.description}</p>
      </Item>
    </div>
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
const Divx = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-end;
`;

export default Details
