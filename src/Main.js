import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './App/screens/home/index'
import Infos from './App/screens/infos/index'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>       
      <Route exact path="/infos" component={Infos}/>       
    	<Route path="/infos/:id" component={Infos}/> 
    </Switch>
  </main>
)

export default Main
