import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const ListItem = ({url,title,released, id}) =>
  <Item>
    <Link style={styles.linkItem} to={`/details/${id}`}>
      <img style={styles.img}alt="foto" src={url}/>
      <h2 to={`/details/${id}`}>{title}</h2>
      <p>{released}</p>
    </Link>
  </Item>;

const Item = styled.div`
  align-Items: center;
  background-Color: #66626E;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin: 10px;

  @media(min-width: 750px) {
    width: 40%;
  }
`;
const styles = {
  img: {
    margin: '0 auto',
    width: '250px',
    maxWidth: '350px'
  },
  linkItem: {
    display: 'flex',
    textDecoration: 'none',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff'
  }
}
export default ListItem
