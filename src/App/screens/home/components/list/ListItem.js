import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({url,title,released}) =>
	<div style={ styles.listItem }>
			<img style={styles.img}alt="foto" src={url}/>
			<a href="/">{title}</a>
			<p>{released}</p>
		</div>;
const styles = {
	listItem: {
		alignItems: 'center',
		backgroundColor: '#66626E',
		color: '#fff',
		display: 'flex',
		flexDirection: 'column',
		width: '40%',
		padding: '10px',
		margin: '10px'
	},
	img: {
		margin: '0 auto',
		width: '70%'
	}
}
export default ListItem
