import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const ListItem = ({url,title,released, id}) =>
  <Item>
      <img style={styles.img}alt="foto" src={url}/>
      <Link to={`/details/${id}`}>{title}</Link>
      <p>{released}</p>
  </Item>;

const Item = styled.div`
  align-Items: center;
  background-Color: #66626E;
  color: #fff;
  display: flex;
  flex-Direction: column;
  width: 100%;
  padding: 10px;
  margin: 10px;

  @media(min-width: 550px) {
    width: 40%;
  }
`;
const styles = {
  img: {
    margin: '0 auto',
    width: '70%'
  },
}
export default ListItem
