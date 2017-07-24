import React from 'react'
import PropTypes from 'prop-types'
import EpsApi from 'src/data'
import ListItem from './ListItem'

const List = () => (
      <div style={styles.works}>
        {
            EpsApi.all().map(eps => 
            <ListItem key={eps.id} 
              id={eps.id}
              url={eps.url}   
              title={eps.title} 
              released={eps.released} />)
        }  
      </div>
    );
const styles = {
  works: {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'row wrap',
    width: '100%',
    padding: 0
  }
}
export default List
