import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home.js'
import Details from './components/details/Details.js'

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
