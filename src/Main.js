import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Home from './App/screens/home/Home'
import Details from './App/screens/details/Details'

const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path="/" component={Home}/>       
      <Route exact path="/details" component={Details}/>       
    	<Route path="/details/:id" component={Details}/> 
      <Route exact path="*" component={Home}/>     
    </Switch>
  </main>
)
export default Main
