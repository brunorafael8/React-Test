import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Header = () => (
  <div>
    <Link style={styles.headerLink} to={`/`}>
        <h1 style={styles.nav__title}>Linkin Park discography</h1>
        <svg style={styles.nav__logo} width="100px" height="100px" viewBox="-1.5 295.948 169.954 199.718">
        <g id="icons">
            <g>
              <path fill="#fff" stroke="#fff" d="M83.477,298.08L21.224,432.559l35.281-0.51
                l-13.293,27.1l-35.28-19.941v-86.923l58.982-34.708l4.46-11.897L0,348.054v96.651l46.835,26.022l17.851-39.319l79.604,0.773
                l-46.243-92.828l-38.928,83.976l-23.432-0.186l52.784-112.261l68.397,41.636v87.727L84.01,483.364l-28.25-16.357l-4.367,7.481
                l31.701,19.432l83.859-48.578v-98.174L83.477,298.08z M98.135,357.718l31.227,66.169l-61.043-0.484L98.135,357.718z"/>
            </g>
        </g>
        </svg>
    </Link>
  </div>
)
const styles = {
  headerLink: {
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none'
  },
  nav__title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: '30px'
  }
}

export default Header
