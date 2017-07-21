import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import data from 'src/data'
import ListItem from './ListItem'

class List extends PureComponent {
  state =  { eps: data.eps };
  
  render() {
    return(
      <div style={styles.works}>
        {
            this.state.eps.map(eps => 
            <ListItem key={eps.id} 
              url={eps.url} 
              title={eps.title} 
              released={eps.released} />)
        }  
      </div>
    );
  }
}
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
