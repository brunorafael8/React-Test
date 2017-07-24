import React from 'react'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable';

function MyLoadingComponent() {
 return <div>Loading...</div>;
}

const LoadableComponent = Loadable({
  loader: () => import('./List.js'),
  loading: MyLoadingComponent,  
});

const Home = () =>
      <div>
        <LoadableComponent/>
      </div>;
export default Home
