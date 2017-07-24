import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const ListItem = ({url,title,released, id}) =>
  <Item>
    <Link style={styles.linkItem} to={`/details/${id}`}>
      <img style={styles.img}alt="foto" src={url}/>
      <h2 style={styles.title} to={`/details/${id}`}>{title}</h2>
      <span style={styles.date}>{released}</span>
    </Link>
  </Item>;

const Item = styled.div`
  align-Items: center;
  background-Color: #DBDBDB;
  opacity: 10;
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
  },
  title: {
    color: '#000',
    textDecoration: 'underline',
    marginBottom: 4
  },
  date: {
    color: '#000'
  }
}
export default ListItem
